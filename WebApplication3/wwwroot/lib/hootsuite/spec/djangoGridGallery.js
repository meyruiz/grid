var gridData = {};


function openDialogConfig(el) {
    gridData["cell_dialog_open"] = el;
    var content = el.find("div.inner div.content").text();
    console.log(content);
    var lengthFT = $(el).attr("data-lenFT");
    var lengthIN = $(el).attr("data-lenIN");
    var width = $(el).attr("data-w");

    gridData["dialog"].find("div input.item_lenFT").val(lengthFT);
    gridData["dialog"].find("div input.item_lenIN").val(lengthIN);
    gridData["dialog"].find("div input.item_w").val(width);
    gridData["dialog"].dialog({position: { my: "center", at: "center", of: el }});
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
        },
        addCustomElement: function (lengthFT, lengthIN, widthIN, direction, type) {
            var maxHeight = 0;
            var length = lengthFT + (lengthIN / 12);
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
            for (i = 0; i < this.currentSize; i++) {
                auxList.push(new Array(maxHeight));
            }

            this.gridElement.children('li').each(function () {
                var cellX = parseInt($(this).attr("data-x"));
                var cellY = parseInt($(this).attr("data-y"));
                var cellW = parseInt($(this).attr("data-w"));
                var cellH = parseInt($(this).attr("data-h"));

                for (var i = cellX; i < cellX + cellW; i++) {
                    for (var j = cellY; j < cellY + cellH; j++) {
                        auxList[i][j] = 0;
                    }
                }
            });

            if (direction == "horizontal") {
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
            } else if (direction == "vertical"){ 
                var posX, posY;
                for (i = 0; i < this.currentSize; i++) {
                    var flag = 0;
                    for (var j = 0; j < maxHeight; j++) {
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

            if (type === "Offcut") {
                $item = $(
                    '<li>' +
                    '<div class="inner" style="background: #FF6FFF;">' +
                    '<div class="controls" style="background: #FF6FFF;">' +
                    '<a href="#config" class="config" style="background: #FF6FFF;">Config</a>' +
                    '</div>' +
                    '<div class="info" style="background: #FF6FFF;">' +
                    '<p class="dimensions">' + length.toFixed(4) + "'" + 'x' + widthIN + '.0000"</p>' +
                    '<p> Cust: Acme Mining Co.' +
                    '<p> Date: 03/31/2019' +
                    '<p> Order: 123456789' +
                    '<p> Prod Ord: 123456789' +
                    '</div>' +
                    '</div>' +
                    '</li>'
                );
            } else {
                $item = $(
                    '<li>' +
                    '<div class="inner">' +
                    '<div class="controls">' +
                    '<a href="#config" class="config">Config</a>' +
                    '</div>' +
                    '<div class="info">' +
                        '<p class="dimensions">' + length.toFixed(4) + "'" + 'x' + widthIN + '.0000"</p>' + 
                        '<p> Cust: Acme Mining Co.' +
                        '<p> Date: 03/31/2019' +
                        '<p> Order: 123456789' +
                        '<p> Prod Ord: 123456789' +
                    '</div>' +
                    '</div>' +
                    '</li>'
                );
            }

            

            $item.attr({
                'data-w': widthIN,
                'data-h': length,
                'data-lenFT': lengthFT,
                'data-lenIN': lengthIN,
                'data-x': posX,
                'data-y': posY,
                'data-status': type,
                'data-cust': "Acme Mining Co",
                'data-date': "03/31/2019",
                'data-order': 123456789,
                'data-prod': 123456789
            });

            this.items.push([{ w: widthIN, h: length, x: posX, y: posY, 
                                lenFT: lengthFT, lenIN: lengthIN, status: type, 
                                cust: "Acme Mining Co", date: "03/31/2019", order: 123456789, prod: 123456789}]);

            this.gridElement.append($item);
            $item.find(".config").click(function (e) {
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
        offcut: function (type) {
            var offcutWidth;
            var offcutHeight;
            var offcutX, offcutY;

            var prevX = 0;
            var prevY = 0;

            if (type == "horizontal") {

                this.gridElement.children('li').each(function () {
                    var cellX = parseInt($(this).attr("data-x"));
                    var cellY = parseInt($(this).attr("data-y"));
                    var cellW = parseInt($(this).attr("data-w"));
                    var cellH = parseInt($(this).attr("data-h"));

                    if (cellY <= prevY) {
                        console.log("Y: " + cellY);
                        prevX = cellX;
                        prevY = cellY;

                        /* Get smaller x and y position to get first possible offcut
                        Then calculate posX, posY for new cut
                        */
                        offcutX = cellX + cellW;
                        offcutY = cellH; // get length of last added cut
                    }                    
                });

                // Got x and y  positions but what if its not at the start of the grid
                offcutWidth = data['size'] - offcutX;
                offcutHeight = offcutY;

                console.log("Posx: " + offcutX);
                console.log("width" + offcutWidth);
                console.log("height" + offcutHeight);
                console.log("Start x" + prevX);
                console.log("Start y" + prevY);

                if (prevX == 0) {
                    gridData["DemoGrid"].addCustomElement(offcutHeight, 0, offcutWidth, "horizontal", "Offcut");
                }
                if (offcutX == data['size']) {
                    gridData["DemoGrid"].addCustomElement(offcutHeight, 0, prevX, "horizontal", "Offcut");
                }
            } else {
                this.gridElement.children('li').each(function () {
                    var cellX = parseInt($(this).attr("data-x"));
                    var cellY = parseInt($(this).attr("data-y"));
                    var cellW = parseInt($(this).attr("data-w"));
                    var cellH = parseInt($(this).attr("data-h"));

                    if (cellX <= prevX) {
                        console.log("X: " + cellX);
                        prevX = cellX;
                        prevY = cellY;

                        /* Get smaller x and y position to get first possible offcut
                        Then calculate posX, posY for new cut
                        */
                        offcutX = cellW;
                        offcutY = cellY + cellH; // get length of last added cut
                    }
                });
                // Got x and y  positions but what if its not at the start of the grid
                offcutWidth = offcutX;
                offcutHeight = data['size'] - offcutY;

                console.log("width" + offcutWidth);
                console.log("height" + offcutHeight);
                console.log("Start x" + prevX);
                console.log("Start y" + offcutY);

                if (offcutHeight != 0) {
                    gridData["DemoGrid"].addCustomElement(offcutHeight, 0, offcutWidth, "vertical", "Offcut");
                }
            }  
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
        'data': [{ x: 0, y: 0, h: 10, w: 10, lenFT: 10, lenIN: 0, status: "Allocated" },
            { x: 10, y: 0, h: 10, w: 74, lenFT: 10, lenIN: 0, status: "Offcut" },
            { x: 0, y: 10, h: 10, w: 10, lenFT: 10, lenIN: 0, status: "Cut" }]
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
        gridData["DemoGrid"].offcut("horizontal");
        //gridData["DemoGrid"].resize(10);
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
        gridData["DemoGrid"].addCustomElement(lengthFT, lengthIN, widthIN, "horizontal", "Allocated");
        $("#exampleModal input").val("");
        console.log("Add element");
    });

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

});