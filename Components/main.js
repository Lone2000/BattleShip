const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');
const startButton = document.querySelector('#start-button');
// Option Choosing
let angle = 0;
function flip(){
    const optionShips = Array.from((optionContainer.children));
    angle = angle === 0 ? 90 : 0;

    optionShips.forEach(ship =>{
        ship.style.transform = `rotate(${angle}deg)`;
    })
}


// Creating Boards
const width = 10;

function createBoard(color, user){
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');
    gameBoardContainer.style.backgroundColor = color;
    gameBoardContainer.id = user;


    for(let i=0; i < width * width; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.id = i;

        gameBoardContainer.append(block);
    }
    gamesBoardContainer.append(gameBoardContainer);
}

flipButton.addEventListener('click', flip)

createBoard('brown', 'player');
createBoard('orange', 'computer');
