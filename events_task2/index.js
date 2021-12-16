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
        // console.log(tableColumn.offsetLeft)
    }
    tableContainer.append(tableString);
}

let tdArr = document.querySelectorAll('td');

tdArr.forEach((el) => {
    let left = el.offsetLeft;
    let top = el.offsetTop;
    el.setAttribute("style", `left: ${left}px; top: ${top}px`);
    // el.classList.add("td");
});

tdArr.forEach((el) => {
    // el.classList.add("td");
});

tableContainer.addEventListener('mousedown', (e) => {
    let target = e.target;

    if(target.tagName === 'TD') {
        let clickX = e.clientX - e.target.offsetLeft;
        let clickY = e.clientY - e.target.offsetTop;
        
        console.log(clickX);
        console.log(clickY);
        target.classList.add("td");


        target.addEventListener("mousemove", (e) => {

        });

    }
});

