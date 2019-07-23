let zoom = 10;
let zoomScale = 1;
const scaleWidthToHeight = 1;
const grid = document.querySelector("#grid");
const rulerHorizontal = document.querySelector(".ruler-horizontal");
const widthHorizontalRuler = grid.clientWidth;
const rulerVertical = document.querySelector(".ruler-vertical");
const widthVerticalRuler = rulerVertical.clientHeight;
const gridWidth = 84;
const gridHeight = 600;
let flagResize = false;

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    init();
    createRulerDimensions();
});

function init() {
    rulerHorizontal.style.width = `${grid.clientWidth}px`;
    rulerVertical.style.height = `${widthVerticalRuler / scaleWidthToHeight}px`;
}

function createRulerDimensions() {
    let numItemsHorizontal = gridWidth / 12;
    let numItemsVertical = gridHeight / 20;

    for (let i = 0; i <= numItemsHorizontal; i++) {
        let div = document.createElement('div');
        div.className = 'in';
        div.dataset.text = (i * 12) + '.0"';
        rulerHorizontal.appendChild(div);
    }

    for (let i = 0; i <= numItemsVertical; i++) {
        let div = document.createElement('div');
        div.className = 'in';
        div.dataset.text = (i * 20) + ".0'";
        rulerVertical.appendChild(div);
    }
}

/* Zoom Functions */

function setZoom(zoom, el) {
    transformOrigin = [0, 0];
    el = el || instance.getContainer();
    var p = ["webkit", "moz", "ms", "o"],
        s = "scale(" + zoom + ")",
        oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";

    for (var i = 0; i < p.length; i++) {
        el.style[p[i] + "Transform"] = s;
        el.style[p[i] + "TransformOrigin"] = oString;
    }

    el.style["transform"] = s;
    el.style["transformOrigin"] = oString;
}

function showVal(a) {
    zoomScale = Number(a) / 10;
    setZoom(zoomScale, document.getElementsByClassName('grid')[0])
}

function changeZoom(a) {
    const tooltips = document.querySelectorAll('.tooltiptext');
    const fontSize = 4.5;
    const width = 200;
    const height = 140;

    if ((zoom != 7 && a != 1) || (zoom != 14 && a != -1)) {
        zoom += a;
        zoomScale = Number(zoom) / 10;
        setZoom(zoomScale, document.getElementsByClassName('grid')[0]);

        rulerHorizontal.style.width = `${widthHorizontalRuler * zoomScale}px`;
        rulerVertical.style.height = `${widthVerticalRuler * zoomScale}px`;

        if (zoom < 10) {
            tooltips.forEach(tooltip => {
                tooltip.style.fontSize = `${fontSize / zoomScale}em`;
                tooltip.style.width = `${width / zoomScale}px`;
                tooltip.style.height = `${height / zoomScale}px`;
            });
        }
    }
    gridData["DemoGrid"].hideInfoCutIfOverflow();
}


/* Tooltips */

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

/* Calculate Cost Functions */

function getPercentageOffcut (size, direction) {
    if (direction == "horizontal") {
        return (100 / gridWidth) * size;
    }

    if (direction == "vertical") {
        return (100 / gridHeight) * size;
    }
}

function calculateCost() {
    let costModal = document.querySelector('#belt-cut-cost');
    let offcutPercentage = parseFloat(costModal.querySelector("#offcutPercentage").value);
    let cutPercentage = 100 - offcutPercentage;
    let total_qty = 40;
    let cutTotalCost = total_qty * (cutPercentage / 100);
    let offcutTotalCost = total_qty * (offcutPercentage / 100);
    console.log(cutPercentage);

    costModal.querySelector("#cutCost").value = cutTotalCost.toFixed(4);
    costModal.querySelector("#cutPercentage").value = cutPercentage.toFixed(3) + "%";

    costModal.querySelector("#offcutCost").value = offcutTotalCost.toFixed(4);
}

function setCostInformation(id, offcutData) {
    let currentCut = gridData["DemoGrid"].gridElement.children('li')[id];
    let costModal = document.querySelector('#belt-cut-cost');
    let cutLength = parseInt(currentCut.dataset.h) / 12;
    let cutWidth = parseInt(currentCut.dataset.w);
    let offcutLength = offcutData.h / 12;
    let offcutWidth = offcutData.w;
    let cutTotalCost = 37.8; // total_qty * (cf_cut_percentage/ 100) * cost
    let offcutTotalPercentage = offcutData.percOffcut; // 100 -  offcut_cost_percentage
    let cutTotalPercentage = 100 - offcutTotalPercentage;

    costModal.querySelector('#itemId').value = "BELTDEMO";
    costModal.querySelector('#itemName').value = "BELT DEMO";
    costModal.querySelector('#length').value = "BELTDEMO";
    costModal.querySelector('#width').value = "BELT DEMO";

    costModal.querySelector('#itemDimensions').value =
        cutLength + "'  x " + cutWidth.toFixed(3) + '"';

    costModal.querySelector('#offcutDimensions').value =
        offcutLength + "'  x " + offcutWidth.toFixed(3) + '"';

    costModal.querySelector("#cutCost").value = cutTotalCost.toFixed(4);
    costModal.querySelector("#cutPercentage").value = cutTotalPercentage.toFixed(3) + "%";

    costModal.querySelector("#offcutCost").value = cutTotalCost.toFixed(4);
    costModal.querySelector("#offcutPercentage").value = offcutTotalPercentage.toFixed(3) + "%";
}