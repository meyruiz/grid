var gridData = {};


function openDialogConfig(el) {
    gridData["cell_dialog_open"] = el;
    var lengthFT = $(el).attr("data-lenFT");
    var lengthIN = $(el).attr("data-lenIN");
    var width = $(el).attr("data-w");

    gridData["dialog"].find("div input.item_lenFT").val(lengthFT);
    gridData["dialog"].find("div input.item_lenIN").val(lengthIN);
    gridData["dialog"].find("div input.item_w").val(width);
    gridData["dialog"].dialog({ position: { my: "center", at: "center", of: el } });

    gridData["DemoGrid"].toggleOffcuts($(el).attr("data-id"));

    if ($(el).hasClass("showHOffcut")) {
        gridData["dialog"].find("div .add-horizontal-offcut").show();
        gridData["dialog"].find("div .add-horizontal-offcut").attr("data-id", $(el).attr("data-id"));
    } else {
        gridData["dialog"].find("div .add-horizontal-offcut").hide();
    }

    if ($(el).hasClass("showVOffcut")) {
        gridData["dialog"].find("div .add-vertical-offcut").show();
        gridData["dialog"].find("div .add-vertical-offcut").attr("data-id", $(el).attr("data-id"));
    } else {
        gridData["dialog"].find("div .add-vertical-offcut").hide();
    }

    gridData["dialog"].dialog("open");
}

function applyDialogConfig() {
    var lengthFT = parseInt(gridData["dialog"].find("div input.item_lenFT").val());
    var lengthIN = parseInt(gridData["dialog"].find("div input.item_lenIN").val());
    var width = parseInt(gridData["dialog"].find("div input.item_w").val());
    //var content = gridData["dialog"].find("div input.item_content").val(lengthFT);

    var length = lengthFT + (lengthIN / 12);

    gridData["cell_dialog_open"].attr("data-lenFT", lengthFT);
    gridData["cell_dialog_open"].attr("data-lenIN", lengthIN);
    gridData["cell_dialog_open"].attr("data-w", width);
    //gridData["cell_dialog_open"].attr("item_content", content);
    gridData["cell_dialog_open"].find(".inner .info .dimensions").text(length.toFixed(4) + "'x" + width.toFixed(4)) + '"';

    if (width > 0 && width <= gridData["DemoGrid"].currentSize) {
        gridData["DemoGrid"].gridElement.gridList('resizeItem',
            gridData["cell_dialog_open"],
            {
                lenFT: lengthFT,
                lenIN: lengthIN,
                w: width,
                h: length
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
                    //gridData["grid"].gridList('toggleDrag', true); // Makes errors when removing elements with zoom enabled
                }
            },
            {
                text: "Cancel",
                click: function() {
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
                    //gridData["grid"].gridList('toggleDrag', true);
                }
            },
            {
                text: "Ok",
                click: function() {
                    applyDialogConfig();
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
                    //gridData["grid"].gridList('toggleDrag', true);
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
        currentSize: 1,
        items: [],
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
                var length = item.lenFT + (item.lenIN / 12);

                $item = $(
                    '<li>' +
                        '<div class="inner ' + item.status + '">' +
                            '<div class="controls ' + item.status + '">' +
                            '<a href="#config" class="config ' + item.status + '">Config</a>' +
                            '</div>' +
                            '<div class="info ' + item.status + '">' +
                            '<p class="dimensions">' + length.toFixed(4) + "'" + 'x' + item.w + '.0000"</p>' + 
                            '<p> Cust: Acme Mining Co.' +
                            '<p> Date: 03/31/2019' +
                            '<p> Order: 123456789' +
                            '<p> Prod Ord: 123456789' +
                            '</div>' +
                        '</div>' +
                    '</li>'
                );

                $item.attr({
                    'data-id': item.id,
                    'data-w': item.w,
                    'data-h': item.h,
                    'data-x': item.x,
                    'data-y': item.y,
                    'data-lenFT': item.lenFT,
                    'data-lenIN': item.lenIN,
                    'data-status': item.status,
                    'data-cust': "Acme Mining Co",
                    'data-date': "03/31/2019",
                    'data-order': 123456789,
                    'data-prod': 123456789
                });
                this.gridElement.append($item);
            }
            this._init();

            // Get all built elements and pass them to var items array
            gridData["DemoGrid"].getElementsToArray();
        },
        addCustomElement: function (x, y, lengthFT, lengthIN, widthIN, direction, status) {
            var maxHeight = 0;
            var length = lengthFT + (lengthIN / 12);
            items.forEach(function (value, index) {
                var cellY = parseInt(value.dataset.y);
                var cellH = parseInt(value.dataset.h);

                if (cellY + cellH > maxHeight) {
                    maxHeight = cellY + cellH;
                }
            });

            // HACK for bug fix
            maxHeight++;

            var auxList = [];
            var i;
            for (i = 0; i < this.currentSize; i++) {
                auxList.push(new Array(maxHeight));
            }

            items.forEach(function (value, index) {
                var cellX = parseInt(value.dataset.x);
                var cellY = parseInt(value.dataset.y);
                var cellW = parseInt(value.dataset.w);
                var cellH = parseInt(value.dataset.h);

                for (var i = cellX; i < cellX + cellW; i++) {
                    for (var j = cellY; j < cellY + cellH; j++) {
                        auxList[i][j] = 0;
                    }
                }
            });

            if (status != "Offcut") {
                var posX, posY;
                for (var j = 0; j < maxHeight; j++) {
                    var flag = 0;
                    for (i = 0; i < this.currentSize; i++) {
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
            }

            $item = $(
                    '<li>' +
                        '<div class="inner ' + status + '">' +
                            '<div class="controls ' + status + '">' +
                            '<a href="#config" class="config ' + status + '">Config</a>' +
                            '</div>' +
                            '<div class="info ' + status + '">' +
                            '<p class="dimensions">' + length.toFixed(4) + "'" + 'x' + widthIN + '.0000"</p>' + 
                            '<p> Cust: Acme Mining Co.' +
                            '<p> Date: 03/31/2019' +
                            '<p> Order: 123456789' +
                            '<p> Prod Ord: 123456789' +
                            '</div>' +
                        '</div>' +
                    '</li>'
                );

            if (status != "Offcut") {
                $item.attr({
                    'data-id': this.gridElement.children('li').length,
                    'data-w': widthIN,
                    'data-h': length,
                    'data-lenFT': lengthFT,
                    'data-lenIN': lengthIN,
                    'data-x': posX,
                    'data-y': posY,
                    'data-status': status,
                    'data-cust': "Acme Mining Co",
                    'data-date': "03/31/2019",
                    'data-order': 123456789,
                    'data-prod': 123456789
                });
            } else {
                $item.attr({
                    'data-id': this.gridElement.children('li').length,
                    'data-w': widthIN,
                    'data-h': length,
                    'data-lenFT': lengthFT,
                    'data-lenIN': lengthIN,
                    'data-x': x,
                    'data-y': y,
                    'data-status': status,
                    'data-cust': "Acme Mining Co",
                    'data-date': "03/31/2019",
                    'data-order': 123456789,
                    'data-prod': 123456789
                });
            }

            // Append item to grid list and items array
            this.gridElement.append($item);
            gridData["DemoGrid"].getElementsToArray();

            $item.find(".config").click(function (e) {
                var el = $(e.currentTarget).closest('li');
                gridData["grid"].gridList('toggleDrag', false);
                openDialogConfig(el);
            });

            this._init();
        },
        getElementsToArray: function () {
            items = [...this.gridElement.children('li')];
            // Update ids to get them later 
            items.forEach(function (value, index) {
                value.dataset.id = index;
            })
        },
        toggleOffcuts: function (id) {
            var cutNextToXPos = false;
            var cutNextToYPos = false;
            var edgeOfGrid = false;
            var currentCut = this.gridElement.children('li')[id];

            var cellX = parseInt(currentCut.dataset.x);
            var cellY = parseInt(currentCut.dataset.y);
            var cellW = parseInt(currentCut.dataset.w);
            var cellH = parseInt(currentCut.dataset.h);
            
            items.forEach(function (value, index) {
                if (index != id) {
                    var x = parseInt(value.dataset.x);
                    var w = parseInt(value.dataset.w);
                    var y = parseInt(value.dataset.y);
                    var h = parseInt(value.dataset.h);

                    // if grid has no empty space horizontally
                    if ((cellY + cellH - 1 > y && cellY < y + h)) {
                        cutNextToXPos = true;
                    }

                    // if grid has no empty space vertically
                    if ((cellX < x + w && cellX + cellW - 1 > x && y > cellY)) {
                        cutNextToYPos = true;
                    }

                    // If the cut is on the edge of the grid
                    if (cellX == 0 || cellX + cellW == data['size']) {
                        edgeOfGrid = true;
                    }  
                }       
            });

            if ((!cutNextToXPos && edgeOfGrid) || this.gridElement.children('li').length == 1) {
                currentCut.classList.add('showHOffcut');
            } else {
                currentCut.classList.remove('showHOffcut');
            }

            // show vertical offcut option for idLastY
            if (!cutNextToYPos || this.gridElement.children('li').length == 1) {
                currentCut.classList.add('showVOffcut');
            } else {
                currentCut.classList.remove('showVOffcut');
            }  
        },
        removeElement: function (element) {
            console.log("Remove");
            console.log(element);
            $(element).remove();
            this.gridElement.gridList('removeElement', element);
            gridData["DemoGrid"].getElementsToArray();
        },
        offcut: function (type, id) {
            var currentCut = this.gridElement.children('li')[id];
            var x = parseInt(currentCut.dataset.x);
            var w = parseInt(currentCut.dataset.w);
            var y = parseInt(currentCut.dataset.y);
            var h = parseInt(currentCut.dataset.h);

            if (type == "horizontal") {
                if (x == 0) {
                    var posX = x + w;
                    var width = data['size'] - w;

                    console.log(posX);
                    console.log(y);
                    console.log(h);
                    console.log(width);

                    //gridData["DemoGrid"].addCustomElement(posX, posY, height, 0, width, "horizontal", "Offcut");
                    gridData["DemoGrid"].addCustomElement(posX, y, h, 0, width, "horizontal", "Offcut");
                }

                if (x + w == data['size']) {
                    var width = data['size'] - w;

                    console.log(0);
                    console.log(y);
                    console.log(h);
                    console.log(width);
                    gridData["DemoGrid"].addCustomElement(0, y, h, 0, width, "horizontal", "Offcut");
                }

            } else {
                var posY = y + h;
                var height = data['size'] - (y + h);
                gridData["DemoGrid"].addCustomElement(x, posY, height, 0, w, "vertical", "Offcut");
            }  
            gridData["DemoGrid"].getElementsToArray();
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
        'size': 84, 
        'data': [{ id: 0, x: 0, y: 0, h: 10, w: 10, lenFT: 10, lenIN: 0, status: "Cut" },
            { id: 1, x: 10, y: 0, h: 10, w: 74, lenFT: 10, lenIN: 0, status: "Offcut" },
            { id: 2, x: 0, y: 10, h: 10, w: 10, lenFT: 10, lenIN: 0, status: "Allocated" },
            { id: 3, x: 10, y: 10, h: 10, w: 10, lenFT: 10, lenIN: 0, status: "Allocated" }
        ]
    };

    gridData["DemoGrid"].items = data['data'];
    gridData["DemoGrid"].currentSize = data['size'];
    gridData["DemoGrid"].gridElement = gridData["grid"];
    gridData["DemoGrid"].gridElement.width(gridData["grid"].parent().width());
    gridData["DemoGrid"].buildElements(data['data']);

    $(window).resize(function () {
        console.log("resize");
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

    $('.add-horizontal-offcut').click(function (e) {
        e.preventDefault();
        gridData["DemoGrid"].offcut("horizontal", this.dataset.id);
        console.log("Add horizontal offcut");
    });

    $('.add-vertical-offcut').click(function (e) {
        e.preventDefault();
        gridData["DemoGrid"].offcut("vertical");
        console.log("Add vertical offcut");
    });

    $('.save').click(function (e) {
        e.preventDefault();

        console.log(gridData["DemoGrid"].items);
    });

    $('.add-cust-cell').click(function (e) {
        e.preventDefault();
        var lengthFT = parseInt(document.getElementById("lengthFT").value);
        var lengthIN = parseInt(document.getElementById("lengthIN").value);
        var widthIN = parseInt(document.getElementById("widthIN").value);
        gridData["DemoGrid"].addCustomElement(-1, -1, lengthFT, lengthIN, widthIN, "horizontal", "Allocated");
        $("#exampleModal input").val("");
        console.log("Add element");
    });

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

});