const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');

// Option Choosing
let angle = 0;
function flip(){
    const optionShips = Array.from((optionContainer.children));
    angle = angle === 0 ? 90 : 0;

    optionShips.forEach(ship =>{
        ship.style.transform = `rotate(${angle}deg)`;
    })
}


flipButton.addEventListener('click', flip)