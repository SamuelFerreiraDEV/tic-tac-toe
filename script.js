const getGrid = document.getElementsByClassName("grid");
const gridArray = Array.from(getGrid);
const counter = document.getElementsByClassName("counter")
const resetButton = document.getElementById("reset-button");
const header = document.getElementById("header");
let winner = null;
let playerTurn = 1;
let gameTurn = 0;
let winCountX = 0;
let winCountO = 0;

gridArray.forEach((e) => {
  e.onclick = () => {
    if(!e.value && !winner) {
      if (playerTurn === 1) {
        e.style.backgroundImage = "url(Assets/x.png)";
        e.value = 1;
        playerTurn = 2;
        gameTurn += 1;
        checkValues(e);
      } else {
        e.style.backgroundImage = "url(Assets/o.png)";
        e.value = 2;
        playerTurn = 1;
        gameTurn += 1;
        checkValues(e);
      };
    };
  };
});

resetButton.onclick = () => {
  gridArray.forEach((e) => {
    e.style.backgroundImage = "none";
    e.value = null;
    playerTurn = 1;
    gameTurn = 0;
    winner = null;
    header.innerHTML = "TIC-TAC-TOE"
  })
};

function checkValues() {
  
  const winConditions = [
    {value1: gridArray[0].value, value2: gridArray[1].value, value3: gridArray[2].value},
    {value1: gridArray[3].value, value2: gridArray[4].value, value3: gridArray[5].value},
    {value1: gridArray[6].value, value2: gridArray[7].value, value3: gridArray[8].value},
    {value1: gridArray[0].value, value2: gridArray[3].value, value3: gridArray[6].value},
    {value1: gridArray[1].value, value2: gridArray[4].value, value3: gridArray[7].value},
    {value1: gridArray[2].value, value2: gridArray[5].value, value3: gridArray[8].value},
    {value1: gridArray[0].value, value2: gridArray[4].value, value3: gridArray[8].value},
    {value1: gridArray[2].value, value2: gridArray[4].value, value3: gridArray[6].value},
  ];

  winConditions.forEach ((e) => { 
    if(e.value1 === 1 && e.value2 === 1 && e.value3 === 1) {
      winner = "X VENCEU!";
      winCountX += 1;
      header.innerHTML = `${winner}`;
      counter[0].innerHTML = winCountX;
    } else if (e.value1 === 2 && e.value2 === 2 && e.value3 === 2) {
      winner = "O VENCEU!";
      winCountO += 1;
      header.innerHTML = `${winner}`;
      counter[1].innerHTML = winCountO;
    } else if (gameTurn === 9 && !winner) {
      winner = "EMPATE!";
      header.innerHTML = `${winner}`;
    };
  });
};
