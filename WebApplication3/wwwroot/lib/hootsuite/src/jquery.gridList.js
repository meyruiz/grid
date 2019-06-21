// It does not try to register in a CommonJS environment since jQuery is not
// likely to run in those environments.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'gridlist'], factory);
    } else {
        factory(jQuery, GridList);
    }
}(function($, GridList) {

    var DraggableGridList = function(element, options, draggableOptions) {
        this.options = $.extend({}, this.defaults, options);
        this.draggableOptions = $.extend(
            {}, this.draggableDefaults, draggableOptions);

        this.$element = $(element);
        this._init();
        this._bindEvents();
    };

    DraggableGridList.prototype = {

        defaults: {
            lanes: 1,
            width: 1,
            height: 1,
            direction: "horizontal",
            itemSelector: 'li[data-w]',
            widthHeightRatio: 1,
            dragAndDrop: true
        },

        draggableDefaults: {
            zIndex: 2,
            scroll: false,
            containment: "parent"
        },

        destroy: function() {
            this._unbindEvents();
        },

        items: function () {
            return this.items;
        },

        resizeItem: function(element, size) {
            /**
             * Resize an item.
             *
             * @param {Object} size
             * @param {Number} [size.w]
             * @param {Number} [size.h}
             */

            this._createGridSnapshot();
            this.gridList.resizeItem(this._getItemByElement(element), size);
            this._updateGridSnapshot();

            this.render();
        },

        reflow: function() {
            this._calculateCellSize();
            this.render();
        },

        render: function() {
            this._applySizeToItems();
            this._applyPositionToItems();
        },

        removeElement: function (element) {
            var item = this._getItemByElement(element);
            this.gridList.removeItem(item);
            this._applyPositionToItems();
        },

        toggleDrag: function (dragEnabled) {
            if (dragEnabled) {
                this._bindEvents();
            }
            else {
                this._unbindEvents();
            }

            this.$items.draggable({ disabled: !dragEnabled });
            this._disableDrag();
        },

        _bindMethod: function(fn) {
            /**
             * Bind prototype method to instance scope (similar to CoffeeScript's fat
             * arrow)
             */
            var that = this;
            return function() {
                return fn.apply(that, arguments);
            };
        },

        _init: function() {
            // Read items and their meta data. Ignore other list elements (like the
            // position highlight)
            this.$items = this.$element.children(this.options.itemSelector);
            this.items = this._generateItemsFromDOM();
            this._widestItem = Math.max.apply(
                null, this.items.map(function(item) { return item.w; }));
            this._tallestItem = Math.max.apply(
                null, this.items.map(function(item) { return item.h; }));
                
            this._initGridList();
            this.reflow();


            if (this.options.dragAndDrop) {
                // Init Draggable JQuery UI plugin for each of the list items
                // http://api.jqueryui.com/draggable/
                this.$items.draggable(this.draggableOptions);
            }

            this._disableDrag();
        },

        _initGridList: function() {
            // Create instance of GridList (decoupled lib for handling the grid
            // positioning and sorting post-drag and dropping)
            this.gridList = new GridList(this.items, {
                lanes: this.options.lanes,
                width: this.options.width,
                height: this.options.height,
                direction: this.options.direction
            });
        },

        _disableDrag: function () {
            for (let i = 0; i < this.$items.length; i++) {
                const item = this.$items[i];
                if ($(item).attr('data-status') == "Cut") {
                    $(item).removeClass('ui-draggable');
                    $(item).draggable('disable');
                }
            }
        },

        _bindEvents: function() {
            this._onStart = this._bindMethod(this._onStart);
            this._onDrag = this._bindMethod(this._onDrag);
            this._onStop = this._bindMethod(this._onStop);
            this.$items.on('dragstart', this._onStart);
            this.$items.on('drag', this._onDrag);
            this.$items.on('dragstop', this._onStop);

            this._disableDrag();
        },

        _unbindEvents: function() {
            this.$items.off('dragstart', this._onStart);
            this.$items.off('drag', this._onDrag);
            this.$items.off('dragstop', this._onStop);

            this._disableDrag();
        },

        _onStart: function(event, ui) {
            // Create a deep copy of the items; we use them to revert the item
            // positions after each drag change, making an entire drag operation less
            // distructable
            this._createGridSnapshot();

            // Since dragging actually alters the grid, we need to establish the number
            // of cols (+1 extra) before the drag starts

            console.log(this.gridList.grid.length); // outputs 20?

            this._maxGridCols = this.gridList.grid.length;
        },

        _onDrag: function (event, ui) {
            
            var canvasHeight = document.querySelector("#gridHeight").textContent * 20;
            var canvasWidth = document.querySelector("#gridWidth").textContent * 20;
            var item = this._getItemByElement(ui.helper);
            ui.position.top = Math.round(ui.position.top / zoomScale);
            ui.position.left = Math.round(ui.position.left / zoomScale);

            hideTooltip(ui.helper[0]);

            // don't let draggable to get outside of the canvas
            if (ui.position.left < 0)
                ui.position.left = 0;
            if (ui.position.left + (this._cellWidth * (this._getItemWidth(item) / 20)) > canvasWidth) // multiply per item's width / 20 (20 is the grid's size in px)
                ui.position.left = canvasWidth - (this._cellWidth * (this._getItemWidth(item) / 20));
            if (ui.position.top < 0)
                ui.position.top = 0;
            if (ui.position.top + (this._cellHeight * (this._getItemHeight(item) / 20)) > canvasHeight)
                ui.position.top = canvasHeight - (this._cellHeight * (this._getItemHeight(item) / 20));

            
            newPosition = this._snapItemPositionToGrid(item);

            if (this._dragPositionChanged(newPosition)) {
                this._previousDragPosition = newPosition;

                // Regenerate the grid with the positions from when the drag started
                GridList.cloneItems(this._items, this.items);
                this.gridList.generateGrid();

                // Since the items list is a deep copy, we need to fetch the item
                // corresponding to this drag action again
                item = this._getItemByElement(ui.helper);
                this.gridList.moveItemToPosition(item, newPosition);

                // Visually update item positions and highlight shape
                this._applyPositionToItems();
                // this._highlightPositionForItem(item);
            }
        },

        _onStop: function(event, ui) {
            this._updateGridSnapshot();
            this._previousDragPosition = null;

            // HACK: jQuery.draggable removes this class after the dragstop callback,
            // and we need it removed before the drop, to re-enable CSS transitions
            $(ui.helper).removeClass('ui-draggable-dragging');
            showTooltip(ui.helper[0]);

            this._applyPositionToItems();
        },

        _generateItemsFromDOM: function() {
            /**
             * Generate the structure of items used by the GridList lib, using the DOM
             * data of the children of the targeted element. The items will have an
             * additional reference to the initial DOM element attached, in order to
             * trace back to it and re-render it once its properties are changed by the
             * GridList lib
             */
            var _this = this,
                items = [],
                itemsUnableToMove = [],
                item;
            this.$items.each(function(i, element) {
                items.push({
                    $element: $(element),
                    x: Number($(element).attr('data-x')),
                    y: Number($(element).attr('data-y')),
                    w: Number($(element).attr('data-w')),
                    h: Number($(element).attr('data-h')),
                    id: Number($(element).attr('data-id')),
                    status: $(element).attr('data-status')
                });                  
            });

            return items;
        },

        _getItemByElement: function(element) {
            // XXX: this could be optimized by storing the item reference inside the
            // meta data of the DOM element
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].$element.is(element)) {
                    return this.items[i];
                }
            }
        },

        /* Change cell size this instead of every instance of the size */
        _calculateCellSize: function () {
            if (this.options.direction === "horizontal") {
                this._cellHeight = Math.floor(this.$element.height() / this.options.height / zoomScale);
                this._cellWidth = Math.floor(this.$element.width() / this.options.width / zoomScale) * this.options.widthHeightRatio;
                // Prev like this because it bas calculated based on this.options.lanes instead of width/height. Now changed to support different sizes.
                // this._cellWidth = this._cellHeight * this.options.widthHeightRatio; 
            } else {
                this._cellWidth = Math.floor(this.$element.width() / this.options.width / zoomScale);
                this._cellHeight = this.$element.height() / this.options.height / zoomScale / this.options.widthHeightRatio;
            }
            if (this.options.heightToFontSizeRatio) {
                this._fontSize = this._cellHeight * this.options.heightToFontSizeRatio;
            }
        },

        _getItemWidth: function(item) {
            return item.w * this._cellWidth;
        },

        _getItemHeight: function(item) {
            return item.h * this._cellHeight;
        },

        _applySizeToItems: function() {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].$element.css({
                    width: (this._getItemWidth(this.items[i])),
                    height: (this._getItemHeight(this.items[i]))
                });
            }
            if (this.options.heightToFontSizeRatio) {
                this.$items.css('font-size', this._fontSize);
            }
        },

        _applyPositionToItems: function () {

            // TODO: Implement group separators
            for (var i = 0; i < this.items.length; i++) {
                // Don't interfere with the positions of the dragged items
                // Don't interfere with cuts already cut
                if (this.items[i].move) { //|| this.items[i].$element.attr("data-status") == "Cut") {
                    continue;
                }
                this.items[i].$element.attr("data-x", this.items[i].x);
                this.items[i].$element.attr("data-y", this.items[i].y);

                this.items[i].$element.css({
                    left: this.items[i].x * this._cellWidth,
                    top: this.items[i].y * this._cellHeight
                });
            }
            // Update the width of the entire grid container with enough room on the
            // right to allow dragging items to the end of the grid.
            if (this.options.direction === "horizontal") {
                this.$element.width(
                    (this.gridList.grid.length + this._widestItem) * this._cellWidth);
            } else {
                this.$element.height(
                    (this.gridList.grid.length + this._tallestItem) * this._cellHeight);
            }
        },

        _dragPositionChanged: function(newPosition) {
            if (!this._previousDragPosition) {
                return true;
            }

            return (newPosition[0] != this._previousDragPosition[0] ||
            newPosition[1] != this._previousDragPosition[1]);
        },

        _snapItemPositionToGrid: function(item) {
            var position = item.$element.position();

            position[0] -= this.$element.position().left;

            var col = Math.round((position.left / this._cellWidth) / zoomScale),
                row = Math.round((position.top / this._cellHeight) / zoomScale);

            // Keep item position within the grid and don't let the item create more
            // than one extra column
            col = Math.max(col, 0);
            row = Math.max(row, 0);

            if (this.options.direction === "horizontal") {
                col = Math.min(col, this._maxGridCols);
                row = Math.min(row, this.options.height - item.h);
            } else {
                col = Math.min(col, this.options.width - item.w);
                row = Math.min(row, this._maxGridCols);
            }

            return [col, row];
        },

        _createGridSnapshot: function() {
            this._items = GridList.cloneItems(this.items);
        },

        _updateGridSnapshot: function() {
            // Notify the user with the items that changed since the previous snapshot
            this._triggerOnChange();
            GridList.cloneItems(this.items, this._items);
        },

        _triggerOnChange: function() {
            if (typeof(this.options.onChange) != 'function') {
                return;
            }
            this.options.onChange.call(
                this, this.gridList.getChangedItems(this._items, '$element'));
        }
    };

    $.fn.gridList = function(options, draggableOptions) {
        var instance,
            method,
            args;
        if (typeof(options) == 'string') {
            method = options;
            args =  Array.prototype.slice.call(arguments, 1);
        }
        this.each(function() {
            instance = $(this).data('_gridList');
            // The plugin call be called with no method on an existing GridList
            // instance to re-initialize it
            if (instance && !method) {
                instance.destroy();
                instance = null;
            }
            if (!instance) {
                instance = new DraggableGridList(this, options, draggableOptions);
                $(this).data('_gridList', instance);
            }
            if (method) {
                instance[method].apply(instance, args);
            }
        });
        // Maintain jQuery chain
        return this;
    };

}));
