console.log('hello')


const COLORS = {
    null: 'gray',
    '1': 'blue',
    '-1': 'red'
}


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



const squareArr = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]

/// EVENT LISTENERS

document.getElementById('board').addEventListener('click', handleChoice)






/// Functions
init()

function init(){
board = 
    [null, null, null, null, null, null, null, null, null]

turn = 1;

winner = null;
renderBoard()
}


function handleChoice(e){
  let choice = e.target.id - 1
  // Guard for clicking on a null space
  if(board[choice] !== null){
    return
  }
    board[choice] = turn
    if(turn === 1){
        turn = -1
    } else if (turn === -1){
        turn = 1
    }
  console.log(choice, board[choice])
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
counter = 0;
for(let i=0; i<across.length; i++){
counter += board[across[i]]
console.log(counter, board[across[i]])
if(Math.abs(counter) === 3 ){
    alert('Winner, winner')
} 
}
counter = 0;

for(let i=0; i<down.length; i++){
    counter += board[down[i]]
    console.log(counter, board[down[i]])
    if(Math.abs(counter) === 3 ){
        alert('Winner, winner')
    } else if(i === down.length){
        counter = 0;
    }
    }

}
