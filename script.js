const displayCordanates = document.querySelector(".display-cordenates");
const chessBoard = document.querySelector("#chess-board");
const playGame = document.querySelector("#play-game")
const count = document.querySelector("#count-wrong");

const rightMoveSound = new Audio('rightmove.mp3');
const wrongMoveSound = new Audio('wrong-move.mp3')

playGame.addEventListener('click', startGame)

const arrCordenates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const classMap = new Map([['A', 'column-a'], ['B', 'column-b'], ['C', 'column-c'], ['D', 'column-d'],      
['E', 'column-e'], ['F', 'column-f'], ['G', 'column-g'], ['H', 'column-h']]);

function changeCordenates(event){

    const ress = Array.from(event.target.classList)

    if (ress.includes(classMap.get(displayCordanates.innerHTML))){
        count.innerText += '🟢';
        rightMoveSound.play();
    } else {
        count.innerText += '🔴';
        wrongMoveSound.play();
    }

    console.log(displayCordanates.innerHTML)
    displayCordanates.innerText = randomCordenates()
}

function randomCordenates() {
    return arrCordenates[Math.floor(Math.random() * (7 - 0 + 1) + 0)]
}

function startGame() {
    displayCordanates.innerText = randomCordenates();
    chessBoard.addEventListener('click', changeCordenates)
}
