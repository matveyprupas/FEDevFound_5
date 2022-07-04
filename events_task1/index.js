let start = new Date();

let tableContainer = document.querySelector('table.table');
for (let i = 1; i <= 100; i++) {
    let tableString = document.createElement("tr");
    for (let k = 1; k <= 100; k++) {
        let tableColumn = document.createElement("td");
        
        // Uncomment code below to check another time 

        tableColumn.addEventListener("click", (e) => {
            console.log('Click on TD!');
        });
        
        tableString.append(tableColumn);
    }
    tableContainer.append(tableString);
}

// Comment code below to check another time

// tableContainer.addEventListener('click', (e) => {
//     if(e.target.tagName === 'TD') {
//         console.log('Click on TD!')
//     }
// });

let end = new Date();
console.log(end-start);

// Variant which add listener only for table faster in 2 times