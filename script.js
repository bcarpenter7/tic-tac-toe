
const COLORS = {
    null: 'gray',
    '1': '#282727',
    '-1': 'white'
}

// const O = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1085px-Letter_o.svg.png">`
// const X = `<img src="https://static.vecteezy.com/system/resources/thumbnails/009/344/496/small/x-transparent-free-png.png"></img>`
const O = 'O'
const X = 'X'


const across = [0, 1, 2]
const across2 = [3, 4, 5]
const across3 = [6, 7, 8]
const down = [0, 3, 6]
const down2 = [1, 4, 7]
const down3 = [2, 5, 8]
const diaRight = [0, 4, 8]
const diaLeft = [2, 4, 6]
let board;
let turn;
let winner;
let counter;
let mark;


/// Cached elemehnts
const squareOne = document.getElementById('1')
const squareTwo = document.getElementById('2')
const squareThree = document.getElementById('3')
const squareFour = document.getElementById('4')
const squareFive = document.getElementById('5')
const squareSix = document.getElementById('6')
const squareSeven = document.getElementById('7')
const squareEight = document.getElementById('8')
const squareNine = document.getElementById('9')
const button = document.querySelector('button')
const message = document.querySelector('h2')
const squareArr = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]

/// EVENT LISTENERS

document.getElementById('board').addEventListener('click', handleChoice)
button.addEventListener('click', init)


/// Functions
init()

function init(){
board = 
    [null, null, null, null, null, null, null, null, null]
mark = O;
turn = 1;
message.innerText = "Player One's turn!"
squareOne.innerHTML = ''
squareTwo.innerHTML = ''
squareThree.innerHTML = ''
squareFour.innerHTML = ''
squareFive.innerHTML = ''
squareSix.innerHTML = ''
squareSeven.innerHTML = ''
squareEight.innerHTML = ''
squareNine.innerHTML = ''
winner = null;
renderBoard()
}


function handleChoice(e){
    if(turn === 0) return
  let choice = e.target.id - 1
  // Guard for clicking on a null space
  if(board[choice] !== null){
    return
  }
    board[choice] = turn
    if(turn === 1){
        message.innerText = "Player Two's turn"
        turn = -1
        mark = X;
    } else if (turn === -1){
        turn = 1
        message.innerText = "Player One's turn"
        mark = O;
        
    }
  console.log(choice, board[choice], board[choice].innerHTML, e.target, 'etear')
  e.target.innerHTML = mark;
  turn === -1 ? e.target.style.color = 'white' : e.target.style.color = '#282727'
  renderBoard()
  getWinner()
}

function renderBoard(){
    for(let i = 0; i< board.length; i++){
        squareArr[i].style.backgroundColor = COLORS[board[i]]
        console.log(i)
    }
    
}

function getWinner(){
checkBoard(across)
checkBoard(across2)
checkBoard(across3)
checkBoard(down)
checkBoard(down2)
checkBoard(down3)
checkBoard(diaRight)
checkBoard(diaLeft)
if(board.indexOf(null) === -1 && turn !== 0){
    message.innerText = 'Tie. Neither player wins :('
}
}


function checkBoard(direction){
    counter = 0;
    for(let i=0; i<direction.length; i++){
    counter += board[direction[i]]
    if(Math.abs(counter) === 3 ){
        // alert('Winner, winner')
        renderSuccess()
    } 
    }
}


function renderSuccess(){
    if(turn === 1){
    message.innerText = `Player Two wins!`
    } else {
        message.innerText = 'Player One wins!'
    }
    turn = 0
    
}
