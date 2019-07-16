var gridData = {};

function isOverflown(element) {
    return element.scrollHeight - 10 > element.clientHeight * zoomScale || element.scrollWidth - 22 > element.clientWidth * zoomScale;
}

function showTooltip(el) {
    var element = el.childNodes[0];
    el.style.zIndex = 2;
    if (isOverflown(el)) {
        element.style.visibility = "visible";
    }
}

function hideTooltip(el) {
    var element = el.childNodes[0];
    el.style.zIndex = 1;
    element.style.visibility = "hidden";
}

function openDialogConfig(el) {
    gridData["cell_dialog_open"] = el;
    var length = $(el).attr("data-h");
    var width = $(el).attr("data-w");

    gridData["dialog"].find("div input.item_lenFT").val(Math.floor(length / 12));
    gridData["dialog"].find("div input.item_lenIN").val(length % 12);
    gridData["dialog"].find("div input.item_w").val(width);
    gridData["dialog"].dialog({ position: { my: "top", at: "top", of: el } });

    gridData["DemoGrid"].showOffcutButtons(el);
    gridData["dialog"].dialog("open");
}

function applyDialogConfig() {
    var lengthFT = parseInt(gridData["dialog"].find("div input.item_lenFT").val());
    var lengthIN = parseInt(gridData["dialog"].find("div input.item_lenIN").val());
    var width = parseInt(gridData["dialog"].find("div input.item_w").val());

    var length = lengthFT + (lengthIN / 12);

    if (width > 0 && width <= gridData["DemoGrid"].currentSize) {
        gridData["DemoGrid"].gridElement.gridList('resizeItem',
            gridData["cell_dialog_open"],
            {
                w: width,
                h: length * 12
            }
        );
    }

    if (!flagResize) {
        gridData["cell_dialog_open"].attr("data-lenIN", (lengthFT * 12) + lengthIN);
        gridData["cell_dialog_open"].attr("data-w", width);
        gridData["cell_dialog_open"].attr("data-h", length * 12);

        gridData["cell_dialog_open"].find(".tooltiptext .dimensions").text(length.toFixed(4) + "'x" + width.toFixed(4)) + '"';
        gridData["cell_dialog_open"].find(".inner .info .dimensions").text(length.toFixed(4) + "'x" + width.toFixed(4)) + '"';
        gridData["DemoGrid"].hideInfoCutIfOverflow(gridData["cell_dialog_open"].attr("data-id"));
    }

    flagResize = false;
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
                }
            },
            {
                text: "Cancel",
                click: function() {
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
                }
            },
            {
                text: "Ok",
                click: function() {
                    applyDialogConfig();
                    gridData["cell_dialog_open"] = null;
                    $( this ).dialog( "close" );
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
        currentSize: 84,
        items: [],
        _init: function () {
            this.gridElement.gridList({
                lanes: gridData["DemoGrid"].currentSize,
                width: gridData["DemoGrid"].currentSize,
                height: 7200,
                widthHeightRatio: scaleWidthToHeight,
                heightToFontSizeRatio: 1.55 * scaleWidthToHeight,
                direction: 'vertical',
                onChange: function (changedItems) {
                }
            });
        },
        buildElements: function (items) {
            var item, i;
            this.gridElement.empty();
            for (i = 0; i < items.length; i++) {
                item = items[i];
                var length = item.h / 12;

                $item = $(
                    '<li class="' + item.status + '" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)" >' +
                    '<div class="tooltiptext">' +
                    '<p class="dimensions">' + length.toFixed(4) + "' x " + item.w + '.0000"' + '</p>' +
                    '<p>Prod Ord #: ' + 123456789 + '</p>' +
                    '<p>Order #: ' + 1000168 + '</p>' +
                    '<p>Order Date #: ' + "5/19/2011" + '</p>' +
                    '<p>Cust ID: ' + 100031 + '</p>' +
                    '<p>Cust: ' + "Johnstone Machining" + '</p>' +
                    '</div>' +
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
                    'data-status': item.status,
                    'data-cust': "Acme Mining Co",
                    'data-date': "03/31/2019",
                    'data-order': 123456789,
                    'data-prod': 123456789
                });
                this.gridElement.append($item);

                // Need to hide too for cuts for other transactions
                $('li.Cut').find(".controls").hide();

                // if item is too small to display info
                if (item.w <= 9 && length < 10) {
                    $item[0].childNodes[1].childNodes[1].style.visibility = "hidden";
                }
            }

            // Initialize grid
            this._init();
            
            // Get all built elements and pass them to var items array
            gridData["DemoGrid"].getElementsToArray();
        },
        addItem: function (x, y, lengthIN, widthIN, status) {
            var maxHeight = 0;
            var length = lengthIN / 12;
            items.forEach(function (value) {
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

            // If its not an offcut we need to check empty space to put the item
            if (status != "Offcut") {
                for (var j = 0; j < maxHeight; j++) {
                    var flag = 0;
                    for (i = 0; i < this.currentSize; i++) {
                        if (auxList[i][j] != 0 && widthIN + i <= this.currentSize) {
                            // overwrite x and y positions so we don't rewrite the whole item later
                            x = i;
                            y = j;
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
                '<li class="' + status + '" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)" >' +
                '<div class="tooltiptext">' +
                '<p class="dimensions">' + length.toFixed(4) + "' x " + widthIN + '.0000"' + '</p>' +
                '<p>Prod Ord #: ' + 123456789 + '</p>' +
                '<p>Order #: ' + 1000168 + '</p>' +
                '<p>Order Date #: ' + "5/19/2011" + '</p>' +
                '<p>Cust ID: ' + 100031 + '</p>' +
                '<p>Cust: ' + "Johnstone Machining" + '</p>' +
                '</div>' +
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

            $item.attr({
                'data-id': this.gridElement.children('li').length - 1,
                'data-w': widthIN,
                'data-h': length * 12,
                'data-x': x,
                'data-y': y,
                'data-status': status,
                'data-cust': "Acme Mining Co",
                'data-date': "03/31/2019",
                'data-order': 123456789,
                'data-prod': 123456789
            });

            // Append item to grid list and items array
            this.gridElement.append($item);
            gridData["DemoGrid"].getElementsToArray();

            // Bind config function
            $item.find(".config").click(function (e) {
                var el = $(e.currentTarget).closest('li');
                gridData["grid"].gridList('toggleDrag', false);
                openDialogConfig(el);
            });

            gridData["DemoGrid"].items.push(
                {   id: this.gridElement.children('li').length - 1,
                    x: x, y: y, h: length * 12, w: widthIN, status: status,
                    cust: "Acme Mining Co", date: "03/31/2019", order: 123456789, prod: 123456789
                }
            );
            gridData["DemoGrid"].hideInfoCutIfOverflow($item.attr("data-id"));
            this._init();
        },

        getItems: function () {
            return items;
        },

        getElementsToArray: function () {
            items = [...this.gridElement.children('li')];
            // Update ids to get them later
            items.forEach(function (value, index) {
                value.dataset.id = index;
            })
        },

        getPercentageOffcut: function (size, direction) {
            if (direction == "horizontal") {
                return (100 / this.width) * size;
            }

            if (direction == "vertical") {
                return (100 / this.height) * size;
            }
        },

        hideInfoCutIfOverflow: function (id) {
            if (id) {
                var el = this.gridElement.children('li')[id];
                // Timer to update resizing changes to the cuts and check if it's actually overflown
                setTimeout(function () {
                    if (isOverflown(el)) {
                        el.childNodes[1].childNodes[1].style.visibility = "hidden";
                    } else {
                        el.childNodes[1].childNodes[1].style.visibility = "visible";
                    }
                }, 300);
            } else {
                let listElements = this.gridElement.children('li');
                items.forEach(function (value, index) {
                    let el = listElements[value.dataset.id];
                    if (isOverflown(el)) {
                        el.childNodes[1].childNodes[1].style.visibility = "hidden";
                    } else {
                        el.childNodes[1].childNodes[1].style.visibility = "visible";
                    }
                })
            }
        },

        offcut: function (type, id) {
            var currentCut = this.gridElement.children('li')[id];
            var x = parseInt(currentCut.dataset.x);
            var w = parseInt(currentCut.dataset.w);
            var y = parseInt(currentCut.dataset.y);
            var h = parseInt(currentCut.dataset.h) / 12;

            if (type == "horizontal") {
                if (x == 0) {
                    var posX = x + w;
                    var width = data['size'] - w;
                    h *= 12; // convert inches to ft 
                    gridData["DemoGrid"].addItem(posX, y, h, width, "Offcut");
                    let percentage = gridData["DemoGrid"].getPercentageOffcut(width, "horizontal");
                    return {x: posX, y: y, h: h, w: width, perc: percentage};
                }

                if (x + w == data['size']) {
                    var width = data['size'] - w;
                    h *= 12; // convert inches to ft 
                    gridData["DemoGrid"].addItem(0, y, h, width, "Offcut");
                    let percentage = gridData["DemoGrid"].getPercentageOffcut(width, "horizontal");
                    return {x: 0, y: y, h: h, w: width, perc: percentage};
                }

            } else {
                var posY = y + h;
                var height = data['height'] - (y + h);
                posY *= 12; // position from in to ft
                height *= 12;
                gridData["DemoGrid"].addItem(x, posY, height, w, "Offcut");
                let percentage = gridData["DemoGrid"].getPercentageOffcut(height / 12, "vertical");
                return {x: x, y: posY, h: height, w: w, perc: percentage};
            }
        },

        removeElement: function (element) {
            console.log("Remove");
            $(element).remove();
            this.gridElement.gridList('removeElement', element);
            gridData["DemoGrid"].getElementsToArray();
        },

        resize: function(size) {
            if (size) {
                this.currentSize = size;
            }

            this.gridElement.gridList('resize', this.currentSize);
        },

        setCostInformation: function (id, offcutData) {
            let currentCut = this.gridElement.children('li')[id];
            let costModal = document.querySelector('#offcutCost');
            let cutLength = parseInt(currentCut.dataset.h) / 12;
            let cutWidth = parseInt(currentCut.dataset.w);
            let offcutLength = offcutData.h / 12;
            let offcutWidth = offcutData.w;
            let cutTotalCost = 37.8; // total_qty * (cf_cut_percentage/ 100) * cost
            let cutTotalPercentage = 50; // 100 -  offcut_cost_percentage

            costModal.querySelector('#itemId').value = "BELTDEMO";
            costModal.querySelector('#itemName').value = "BELT DEMO";
            costModal.querySelector('#length').value = "BELTDEMO";
            costModal.querySelector('#width').value = "BELT DEMO";

            costModal.querySelector('#itemDimensions').value = 
                cutLength + "'  x " + cutWidth.toFixed(3) + '"';

            costModal.querySelector('#offcutDimensions').value =
                offcutLength + "'  x " + offcutWidth.toFixed(3) + '"';

            costModal.querySelector("#cutCost").value = cutTotalCost.toFixed(4);
            costModal.querySelector("#cutPercentage").value = "50.000%";

            costModal.querySelector("#offcutCost").value = cutTotalCost.toFixed(4);
            costModal.querySelector("#offcutPercentage").value = "50.000%";
        },

        showOffcutButtons: function (el) {
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
        },

        toggleOffcuts: function (id) {
            var cutNextToXPos = false;
            var cutNextToYPos = false;
            var edgeOfGrid = false;
            var endOfGridY = false;
            var currentCut = this.gridElement.children('li')[id];

            var cellX = parseInt(currentCut.dataset.x);
            var cellY = parseInt(currentCut.dataset.y);
            var cellW = parseInt(currentCut.dataset.w);
            var cellH = parseInt(currentCut.dataset.h) ;

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
                }       
            });

            // If the cut is on the edge of the grid
            if (cellX == 0 || cellX + cellW == data['size']) {
                edgeOfGrid = true;
            }

            // If the cut at the end of the grid vertically
            if (cellY + cellH == data['height']) {
                endOfGridY = true;
            }  

            if ((!cutNextToXPos && edgeOfGrid) || this.gridElement.children('li').length == 1) {
                currentCut.classList.add('showHOffcut');
            } else {
                currentCut.classList.remove('showHOffcut');
            }

            // show vertical offcut option for idLastY
            if ((!cutNextToYPos && !endOfGridY) || this.gridElement.children('li').length == 1) {
                currentCut.classList.add('showVOffcut');
            } else {
                currentCut.classList.remove('showVOffcut');
            }  
        }
    };

    // Get grid element
    gridData["grid"] = $('#grid');

    // Initialize dialogs
    initializeDialog();

    // Initialize grid
    var data = {
        'size': document.querySelector("#gridWidth").textContent, 
        'height': document.querySelector("#gridHeight").textContent,
        'data': [{"id":0,"x":0,"y":0,"h":240,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789}]//,{"id":1,"x":10,"y":0,"h":120,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789},{"id":2,"x":20,"y":0,"h":120,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789},{"id":3,"x":30,"y":0,"h":120,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789},{"id":4,"x":40,"y":0,"h":120,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789},{"id":5,"x":50,"y":0,"h":120,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789},{"id":6,"x":60,"y":0,"h":120,"w":10,"status":"Allocated","cust":"Acme Mining Co","date":"03/31/2019","order":123456789,"prod":123456789}]
    };

    gridData["DemoGrid"].items = data['data'];
    gridData["DemoGrid"].currentSize = document.querySelector("#gridWidth").textContent;
    gridData["DemoGrid"].width = document.querySelector("#gridWidth").textContent;
    gridData["DemoGrid"].height = document.querySelector("#gridHeight").textContent;
    gridData["DemoGrid"].gridElement = gridData["grid"];
    gridData["DemoGrid"].gridElement.width(gridData["grid"].parent().width());
    gridData["DemoGrid"].buildElements(data['data']);

    $(window).resize(function () {
        console.log("resize");
        //gridData["grid"].gridList('reflow');
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
        console.log(this);
        let offcutData = gridData["DemoGrid"].offcut("horizontal", this.dataset.id);
        gridData["DemoGrid"].setCostInformation(this.dataset.id, offcutData);
        console.log(offcutData);
        console.log("Add horizontal offcut");
    });

    $('.add-vertical-offcut').click(function (e) {
        e.preventDefault();
        let offcutData = gridData["DemoGrid"].offcut("vertical", this.dataset.id);
        gridData["DemoGrid"].setCostInformation(this.dataset.id, offcutData);
        console.log(offcutData);
        console.log("Add vertical offcut");
    });

    $('.save').click(function (e) {
        e.preventDefault();
        console.log(JSON.stringify(gridData["DemoGrid"].items));
    });

    $('.add-cust-cell').click(function (e) {
        e.preventDefault();
        var lengthFT = parseInt(document.getElementById("lengthFT").value);
        var lengthIN = parseInt(document.getElementById("lengthIN").value);
        var widthIN = parseInt(document.getElementById("widthIN").value);

        if (!lengthIN) {
            lengthIN = 0;
        }

        if ((lengthFT != null && widthIN != null) && (lengthFT > 0 && lengthIN >= 0 && widthIN > 0)) {
            lengthIN = (lengthFT * 12) + lengthIN;
            gridData["DemoGrid"].addItem(-1, -1, lengthIN, widthIN, "Allocated");
        } else {
            alert("Please fill in length and height");
        }

        $("#exampleModal input").val("");
        console.log("Add element");
    });
});