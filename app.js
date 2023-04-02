/****State */
function turn(id){
  return function(){
    if (state.board[Math.floor(id / 3)][id % 3] == ""){
       state.board[Math.floor(id / 3)][id % 3] = state.currentPlayer;
    renderBoard();
    if(determineWin()){
      roundWin();
      resetboard()  
    }
    else if(determineTie() ){
      tie();
    }
  else {
    switchPlayer();
    }
}
}};

function determineWin(){
  ///rows
  if(state.board[0][0] === state.currentPlayer && state.board[0] [1] === state.currentPlayer && state.board[0] [2] === state.currentPlayer){
  return true;
}
  if(state.board[1] [0] === state.currentPlayer && state.board[1] [1] === state.currentPlayer && state.board[1] [2] === state.currentPlayer){
      return true;
      }
  if (state.board[2] [0] === state.currentPlayer && state.board[2] [1] === state.currentPlayer && state.board[2] [2] === state.currentPlayer){
      return true;
    }
  //columns
    if (state.board[0] [0] == state.currentPlayer && state.board[1] [0] == state.currentPlayer && state.board[2] [0] == state.currentPlayer){
      return true;
    }
    if (state.board[0] [1] == state.currentPlayer && state.board[1] [1] == state.currentPlayer && state.board[2] [1] == state.currentPlayer){
      return true;
    }
    if (state.board[0] [2] == state.currentPlayer && state.board[1] [2] == state.currentPlayer && state.board[2] [2] == state.currentPlayer){
      return true;
    }
    //// diagnols
    if (state.board[0] [0] == state.currentPlayer && state.board[1] [1] == state.currentPlayer && state.board[2] [2] == state.currentPlayer){
      return true;
    }
    if (state.board[0] [2] == state.currentPlayer && state.board[1] [1] == state.currentPlayer && state.board[2] [0] == state.currentPlayer){
      return true;
  }
  
}


function determineTie(){
  const isTie = state.board.every(row => row.every(position => position !== ""));
  return isTie;
}

function tie(){
  let resetButton = document.createElement('button');
  resetButton.textContent='Reset';
  resetButton.addEventListener('click', () => {
    resetState();
    resetButton.remove();
  });
  const message = document.createElement('div');
  message.textContent = "It's a Tie, Go Again";
  message.appendChild(resetButton);
  
 
  document.body.appendChild(message);
}


function roundWin(){
  alert(`Player ${state.currentPlayerName} won this round!`);
  let resetButton = document.createElement('button');
  resetButton.textContent='Reset';
  resetButton.addEventListener('click', () => {
    resetState();
    resetButton.remove();
  });
  const message = document.createElement('div');
  
  message.appendChild(resetButton);
  
 
  document.body.appendChild(message);
  resetState(message);
 
  
  //winner gets a score of 1
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
  state.board = [   
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  state.players = [player1, player2];
  state.score = [0, 0];

  const message = document.querySelector('.message');
  if (message){
    message.removeChild(resetButton);
    document.body.removeChild(message);
  
  }
  
 
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
}
renderPlayer();

function render(){
    renderPlayer();
    renderBoard();
}
   
/////****************************Event Listeners **********************//////

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