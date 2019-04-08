var gridData = {};


function openDialogConfig(el) {
    gridData["cell_dialog_open"] = el;
    var content = el.find("div.inner div.content").text();
    var width = $(el).attr("data-w");
    var height = $(el).attr("data-h");

    gridData["dialog"].find("div input.item_w").val(width);
    gridData["dialog"].find("div input.item_h").val(height);
    gridData["dialog"].dialog({position: { my: "center", at: "center", of: el }});
    gridData["dialog"].dialog("open");
}

function applyDialogConfig() {
    // var content = dialog.find("div input.item_content").val();
    var width = parseInt(gridData["dialog"].find("div input.item_w").val());
    var height = parseInt(gridData["dialog"].find("div input.item_h").val());

    gridData["cell_dialog_open"].attr("data-w", width);
    gridData["cell_dialog_open"].attr("data-h", height);
    if (width > 0 && width <= gridData["DemoGrid"].currentSize) {
        gridData["DemoGrid"].gridElement.gridList('resizeItem',
            gridData["cell_dialog_open"],
            {
                w: width,
                h: height
            }
        );
    }
}

function initializeDialog() {
    gridData["dialog"] = $("#dialog");

    gridData["dialog"].dialog({
        autoOpen: false,
        width: 'inherit',
        buttons: [
            {
                text: "Remove",
                click: function() {
                    gridData["DemoGrid"].removeElement(
                        gridData["cell_dialog_open"]);
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
                    gridData["grid"].gridList('toggleDrag', true);
                }
            },
            {
                text: "Cancel",
                click: function() {
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
                    gridData["grid"].gridList('toggleDrag', true);
                }
            },
            {
                text: "Ok",
                click: function() {
                    applyDialogConfig();
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
                    gridData["grid"].gridList('toggleDrag', true);
                }
            }
        ],
        close: function() {
            gridData["cell_dialog_open"] = null;
            gridData["grid"].gridList('toggleDrag', true);
        }
    });
}

$(function () {
    gridData["DemoGrid"] = {
        gridElement: null,
        currentSize: 3,
        _init: function(){
            this.gridElement.gridList({
                lanes: gridData["DemoGrid"].currentSize,
                widthHeightRatio: 1,
                heightToFontSizeRatio: 0.15,
                direction: 'vertical',
                onChange: function(changedItems) {
                }
            });
        },
        buildElements: function(items) {
            var item, i;
            this.gridElement.empty();
            for (i = 0; i < items.length; i++) {
                item = items[i];
                $item = $(
                    '<li>' +
                        '<div class="inner">' +
                            '<div class="controls">' +
                                '<a href="#config" class="config">Config</a>' +
                            '</div>' +
                            '<div class="content">' +
                                item.content +
                            '</div>' +
                        '</div>' +
                    '</li>'
                );
                $item.attr({
                    'data-w': item.w,
                    'data-h': item.h,
                    'data-x': item.x,
                    'data-y': item.y
                });
                this.gridElement.append($item);
            }
            this._init();
        },
        addElement: function () {

            var maxHeight = 0;
            this.gridElement.children('li').each(function () {
                var cellY = parseInt($(this).attr("data-y"));
                var cellH = parseInt($(this).attr("data-h"));

                if (cellY + cellH > maxHeight) {
                    maxHeight = cellY + cellH;
                }
            });

            // HACK for bug fix
            maxHeight++;

            var auxList = [];
            var i;
            for (i=0; i<this.currentSize; i++) {
                auxList.push(new Array(maxHeight));
            }

            this.gridElement.children('li').each(function () {
                var cellX = parseInt($(this).attr("data-x"));
                var cellY = parseInt($(this).attr("data-y"));
                var cellW = parseInt($(this).attr("data-w"));
                var cellH = parseInt($(this).attr("data-h"));

                for (var i=cellX; i < cellX + cellW; i++) {
                    for (var j=cellY; j < cellY + cellH; j++) {
                        auxList[i][j] = 0;
                    }
                }
            });

            var posX, posY;
            for (var j=0; j < maxHeight; j++) {
                var flag = 0;
                for (i=0; i < this.currentSize; i++) {
                    if (auxList[i][j] != 0) {
                        posX = i;
                        posY = j;
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1) {
                    break;
                }
            }

            $item = $(
                '<li>' +
                    '<div class="inner">' +
                        '<div class="controls">' +
                            '<a href="#config" class="config">Config</a>' +
                        '</div>' +
                        '<div class="content">' +
                        '</div>' +
                    '</div>' +
                '</li>'
            );
            $item.attr({
                'data-w': 1,
                'data-h': 1,
                'data-x': posX,
                'data-y': posY
            });

            this.gridElement.append($item);
            $item.find(".config").click(function(e) {
                var el = $(e.currentTarget).closest('li');
                gridData["grid"].gridList('toggleDrag', false);
                openDialogConfig(el);
            });

            this._init();
        },
        removeElement: function (element) {
            $(element).remove();
            this.gridElement.gridList('removeElement', element);
        },
        resize: function(size) {
            if (size) {
                this.currentSize = size;
            }
            this.gridElement.gridList('resize', this.currentSize);
        }
    };

    // Get grid element
    gridData["grid"] = $('#grid');
    // Initialize dialogs
    initializeDialog();

    // Initialize grid
    var data = {
        'size': 3, 
        'data': [{"x": 0, "y": 0, "h": 1, "w": 1, "content": "example"}]
    };

    gridData["DemoGrid"].currentSize = data['size'];
    gridData["DemoGrid"].gridElement = gridData["grid"];
    gridData["DemoGrid"].gridElement.width(gridData["grid"].parent().width());
    gridData["DemoGrid"].buildElements(data['data']);

    $(window).resize(function() {
        gridData["grid"].gridList('reflow');
    });

    $(".config").click(function(e) {
        var el = $(e.currentTarget).closest('li');
        gridData["grid"].gridList('toggleDrag', false);
        openDialogConfig(el);
    });

    $('.add-cell').click(function(e) {
        e.preventDefault();
        gridData["DemoGrid"].addElement();
        console.log("Add element");
    });

    $('.add-column').click(function(e) {
        e.preventDefault();
        gridData["DemoGrid"].resize(gridData["DemoGrid"].currentSize + 1);
    });

    $('.remove-column').click(function(e) {
        e.preventDefault();
        gridData["DemoGrid"].resize(Math.max(1,
            gridData["DemoGrid"].currentSize - 1));
    });
});