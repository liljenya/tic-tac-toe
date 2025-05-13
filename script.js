const startButton = document.querySelector('.start-button');
const centeredContent = document.querySelector('.centered-content');

startButton.addEventListener('click', function () {
    centeredContent.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'square';

    for (let i = 1; i <= 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
    }

    centeredContent.appendChild(grid);
});

function Gameboard() {
    const moves = Array(9).fill('');
    return {
        moves
    };
}

function Player(move) {
    return {
        move
    };
}

const playerX = Player('X');
const playerO = Player('0');
let current = playerX;
const gameboard = Gameboard();

function ControlFlow(gameboard, position, symbol) {
    //todo: check if available
    if (gameboard.moves[position] === null) {
        gameboard.moves[position] = symbol;
        gameboard.push(symbol);
    }
    else {
        window.alert('Stop!This place is not empty!');
    }
}

function checkWinner(moves, symbol) {
    //todo: win/loose logic
    const winCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let combo in winCombo) {
        const [a, b, c] = combo;
        if (moves[a] === symbol && moves[b] === symbol && moves[c] === symbol) {
            return true;
        }
        else {
            return false;
        }
    }
}

function switchPlayer() {
    if (current === playerX) {
        current = playerO;
    }
    else {
        current = playerX;
    }
}

