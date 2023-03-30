/****State */
const state = {
board: [
['', '', ''],
['', '', ''],
['', '', '']
],
players:  [ '', ''],
score : [0, 0],
};


console.log(state)

//*************************** */ dom selectors

//body element
const body =  document.querySelector( 'body' )

///Title Element
const titleH1= document.createElement( 'h1' )
titleH1.id = 'title';
titleH1.innerText = 'This is Tick Tack Toe';
body.appendChild( titleH1)

// Main element
const main = document.createElement('main');
const renderBoard = () => {
main.id = 'board';
for(let i =0; i < 9;  i ++){
    const div = document.createElement ("div");
    div.className = 'box'
    div.innerText = state.board[Math.floor(i / 3)][i % 3];
     main.appendChild(div);
}
}
body.appendChild(main);
renderBoard();


//player element
const playerElem = document.createElement('p');
const renderPlayer = () => {
playerElem.id = 'playerNameElem';
let playerElemHTML = '<input placeholder="Enter name Player 1" /><input placeholder="Enter name Player 2" /> <button>Start Game</button>';
playerElem.innerHTML = playerElemHTML;
body.appendChild(playerElem);}
renderPlayer();




function render(){
    renderPlayer();
    renderBoard();
}
    console.log('state is', state);



