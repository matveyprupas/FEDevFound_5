let tableContainer = document.querySelector('table.table');
let tableQuantityCell = 10;
let cellDimention = 30;
tableContainer.setAttribute("width", cellDimention * tableQuantityCell + 'px');
tableContainer.setAttribute("height", cellDimention * tableQuantityCell + 'px');

for (let i = 1; i <= tableQuantityCell; i++) {
    let tableString = document.createElement("tr");
    for (let k = 1; k <= tableQuantityCell; k++) {
        let tableColumn = document.createElement("td");
        tableColumn.setAttribute("width", cellDimention+'px');
        tableColumn.setAttribute("height", cellDimention+'px');
        tableString.append(tableColumn);
    }
    tableContainer.append(tableString);
}

let tdArr = document.querySelectorAll('td');

tdArr.forEach((el) => {
    let left = el.offsetLeft;
    let top = el.offsetTop;

    el.style.left = left + 'px';
    el.style.top = top + 'px';
    el.style.zIndex = 0;
    
    setTimeout(() => el.classList.add("td"), 0);
});

let target = null;

tableContainer.addEventListener('mousedown', (e) => {
    target = e.target;

    if(target.tagName === 'TD') {
        let clickX = e.clientX - target.offsetLeft;
        let clickY = e.clientY - target.offsetTop;

        target.style.zIndex++;
        target.classList.add("td");

        target.addEventListener("mousemove", (e) => {
            if (target) {
                target.style.left = e.clientX - clickX + 'px';
                target.style.top = e.clientY - clickY + 'px';
            }
        });
    }
});

tableContainer.addEventListener("mouseout", endOfMove);
tableContainer.addEventListener("mouseup", endOfMove);

function endOfMove () {
    target.style.zIndex--;
    target = null;
    return;
}