# Devops_demoss



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Tic Tac Toe</h1>
    <div id="board" class="board">
      <div class="cell" onclick="handleMove(0)"></div>
      <div class="cell" onclick="handleMove(1)"></div>
      <div class="cell" onclick="handleMove(2)"></div>
      <div class="cell" onclick="handleMove(3)"></div>
      <div class="cell" onclick="handleMove(4)"></div>
      <div class="cell" onclick="handleMove(5)"></div>
      <div class="cell" onclick="handleMove(6)"></div>
      <div class="cell" onclick="handleMove(7)"></div>
      <div class="cell" onclick="handleMove(8)"></div>
    </div>
    <button onclick="resetGame()">Reset</button>
  </div>

  <script src="script.js"></script>
</body>
</html>


<br> 



body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 300px;
  margin: 50px auto;
  text-align: center;
}

h1 {
  color: #333;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #eee;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
}

button {
  margin-top: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}



<br>

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleMove(index) {
  if (gameBoard[index] === '' && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (checkWinner()) {
      alert(currentPlayer === 'X' ? 'O wins!' : 'X wins!');
    } else if (gameBoard.every(cell => cell !== '')) {
      alert('It\'s a draw!');
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
}
