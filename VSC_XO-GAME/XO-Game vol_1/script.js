let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];
function handleCellClick(cellIndex) {
    if (!gameActive || gameBoard[cellIndex] !== '') {
        return;
    }

    gameBoard[cellIndex] = currentPlayer;
    document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer;

    if (checkForWin()) {
        document.getElementById('gameStatus').textContent = `${currentPlayer} wins!`;
        gameActive = false;
    } else if (!gameBoard.includes('')) {
        document.getElementById('gameStatus').textContent = 'It\'s a draw!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
function checkForWin() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('gameStatus').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}
