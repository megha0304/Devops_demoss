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