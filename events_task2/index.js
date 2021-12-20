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
    setTimeout(() => el.classList.add("td"), 0);
});

tableContainer.addEventListener('mousedown', (e) => {
    let target = e.target;

    if(target.tagName === 'TD') {
        // let startX = e.clientX;
        // let startY = e.clientY;
        let clickX = e.clientX - target.offsetLeft;
        let clickY = e.clientY - target.offsetTop;
        
        // console.log(clickX);
        // console.log(clickY);
        target.classList.add("td");


        target.addEventListener("mousemove", (e) => {
            if (target) {
                // console.log(e.clientX - startX + clickX);
                // let left = (e.clientX - startX + clickX >= cellDimention - 2) ? e.clientX - clickX : e.clientX - clickX; 
                // console.log(e.clientX - startX + clickX >= cellDimention - 2, left);

                target.setAttribute("style", `left: ${e.clientX - clickX}px; top: ${e.clientY - clickY}px`);
                console.log(e.type);
            }
        });

        target.addEventListener("mouseout", (e) => {
            target = null;
            return;
        });


        target.addEventListener("mouseup", (e) => {
            target = null;
            return;
        });
    }
});
