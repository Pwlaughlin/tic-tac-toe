/****State */
function turn(id){
  return function(){
    if (state.board[Math.floor(id / 3)][id % 3] == ""){
       state.board[Math.floor(id / 3)][id % 3] = state.currentPlayer;
    renderBoard();
    if(determineWin()){
      winner();  
    }
    else if(determineTie() ){
      tie();
    }
  else {
    switchPlayer();
    }
}
}};
////Finish this method
function determineWin(){
  if
  (state.board[0] [0] == state.currentPlayer){
   if (state.board[0] [1] == state.currentPlayer){
    if (state.board[0] [2] == state.currentPlayer){
      return true;
    }
   }
  }
}
//finish this one
function determineTie(){
 // a tie is when all board positions are not ""
  
  return false
}
function tie(){
  alert ("Its a tie! Try Again")
}

function winner(){
  alert(`Player ${state.currentPlayerName} is the wiener!`)
}

const state = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  boardevents:[
 [turn (0),turn (1), turn (2)],
 [turn (3),turn (4), turn (5)],
 [turn (6),turn (7), turn (8)]],
  players: ['', ''],
  score: [0, 0],
  currentPlayer: "X"
};

const resetState = () => {
  state.board = [    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  state.players = ['', ''];
  state.score = [0, 0];
};

console.log(state);





//*************************** */ dom selectors
const body =  document.querySelector( 'body' )
const titleH1= document.createElement( 'h1' )
const main = document.createElement('main');
const playerElem = document.createElement('p');

//************************************body element
///Title Element
titleH1.id = 'title';
titleH1.innerText = 'This is Tick Tack Toe';
body.appendChild( titleH1)
//////***********************Render Elements */
// Main element
//render board
const renderBoard = () => {
main.id = 'board';
main.innerHTML = "";
for(let i =0; i < 9;  i ++){
    const div = document.createElement ("div");
    div.className = 'box'
    div.innerText = state.board[Math.floor(i / 3)][i % 3];
    div.addEventListener('click',state.boardevents[Math.floor(i / 3)][i % 3]) 
    main.appendChild(div);

}
}
body.appendChild(main);




//player element
//render player
const renderPlayer = () => {
playerElem.id = 'playerNameElem';
let playerElemHTML = '<input id = "player1" placeholder="Enter name Player 1" /><input id = "player2" placeholder="Enter name Player 2" /> <button id = "startButton">Start Game</button>';
playerElem.innerHTML = playerElemHTML;
body.appendChild(playerElem);
const startButton = document.querySelector('#startButton'); 
startButton.addEventListener('click', startGame);
;
}

renderPlayer();



function render(){
    renderPlayer();
    renderBoard();
}
   
/////****************************Event Listeners **********************//////


//  ^ Prompt the players to enter their names.
// ^Store the names in the state object.
// ^Randomly determine which player goes first and store it in the state object.
// ^Display the current player's name on the screen.
// ^Add a click event listener to each square on the board to handle player moves.
// ^Update the state object with the player's move and update the board on the screen.
// ^Check if there is a winner or if the game is a tie.
// ^Display the winner or a tie message on the screen.
// Update the score and display it on the screen.
// Reset the board for a new game.
function startGame() {
    state.players[0] = document.querySelector('#player1').value;
    state.players[1] = document.querySelector('#player2').value;
      choosePlayer();

  }
  
  function choosePlayer() {
    const players = state.players;
    const randomIndex = Math.floor(Math.random() * 2);
    state.currentPlayerName = players[randomIndex];
    if(randomIndex == 0){
      state.currentPlayer = 'X'
    }
    else
    {
      state.currentPlayer = 'O'
    }
    console.log(`Player ${state.currentPlayerName} goes first.`);
    renderCurrentPlayerName()
  }
  function switchPlayer(){
    if (state.currentPlayer == "X"){
      state.currentPlayer = 'O'
state.currentPlayerName = state.players[1]
    }
    else {
      state.currentPlayer = 'X'
      state.currentPlayerName = state.players[0]
    }
    
    renderCurrentPlayerName();
  }
  
  function renderCurrentPlayerName() {
    playerElem.innerHTML = `Current player: ${state.currentPlayerName}`;
   displayCurrentPlayerName()
  }
  
  function displayCurrentPlayerName(){
  playerNameElem.removeChild(startButton);
 playerNameElem.removeChild(currentPlayer);
  createElement.appendChild(currentPlayer);

  }

resetState ();
render();