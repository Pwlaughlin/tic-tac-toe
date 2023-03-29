/****State */
const state = {};

state.board = ['this is the board'];
console.log(state)


// dom selectors

//body element
const body =  document.querySelector( 'body' )

///Title Element
const titleH1= document.createElement( 'h1' )

titleH1.id = 'title';
titleH1.innerText = 'This is Tick Tack Toe';


body.appendChild( titleH1)

// Main element
const main = document.createElement('main');
main.id = 'board';

for(let i =0; i <9;  i ++){
    const div = document.createElement ("div");
    div.className = 'box'
    main.appendChild(div);
}

body.appendChild(main);

//player element
const playerElem = document.createElement('p');

playerElem.id = 'playerNameElem';

let playerElemHTML = '<input placeholder="Enter name Player 1" /><input placeholder="Enter name Player 2" /> <button>Start Game</button>';

playerElem.innerHTML = playerElemHTML;

body.appendChild(playerElem);





