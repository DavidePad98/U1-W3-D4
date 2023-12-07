// const numbers = Math.ceil(Math.random(1) * 90);
// console.log(numbers);

// const numbers = function () {
//   for (let i = 1; i < 91; i++) {}
// };

//creazione celle
const cells = function () {
  //assegno il div dove voglio le celle
  const cellsDiv = document.getElementById("celle");
  //ciclo per generare quante celle voglio
  for (let i = 0; i < 90; i++) {
    //creo una cella vuota
    const singleCellDiv = document.createElement("div");
    //assegno una classe css al div cella
    singleCellDiv.classList.add("cell");
    //creo il contenuto della cella
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    //appendo il valore di h3 nella cella
    singleCellDiv.appendChild(cellValue);
    //appendo il div che contiene l'h3 al div delle celle
    cellsDiv.appendChild(singleCellDiv);
  }
};
cells();

const attachDelete = function () {
  const aButtons = document.getElementsByClassName("backcell");
  for (let i = 0; i < 90; i++) {
    [i].innerText = i++;
  }
};
attachDelete();
