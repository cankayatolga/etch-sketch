const container = document.getElementById("container");
const button = document.getElementById("button");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};


makeRows(4, 4);

function gridAdjustment() {
    const inputRowNum = prompt('Enter number of Rows:'); // get user's row num
    if (!inputRowNum || inputRowNum > 100) return alert(`Invalid Input!`)
    const inputColumnNum = prompt('Enter number of Column:'); // get user's column num
    makeRows(inputRowNum, inputColumnNum)
}