const startButton = document.querySelector('.start-button');
const centeredContent = document.querySelector('.centered-content');

const playerX = Player('X');
const playerO = Player('0');
let current = playerX;
let gameboard = Gameboard();

startButton.addEventListener('click', function () {
    centeredContent.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'square';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);

        cell.addEventListener('click', function () {
            if (makeMove(gameboard, i, current.move)) {
                cell.textContent = current.move;
                if (checkWinner(gameboard.moves, current.move)) {
                    window.alert(`PLayer ${current.move} has won`);
                }
                if (!gameboard.moves.includes('')) {
                    return alert('Its a draw!');
                }
                switchPlayer();
            }
        })
    }
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-btn';
    resetBtn.textContent = 'Reset';

    centeredContent.appendChild(resetBtn);

    resetBtn.addEventListener('click', function () {
        gameboard = new Gameboard();
        current = playerO;       

        centeredContent.innerHTML = ''; 

        startButton.click(); 
    })


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

function makeMove(gameboard, position, symbol) {
    //todo: check if available
    const madeMove = gameboard.moves[position] === '';
    if (madeMove) {
        gameboard.moves[position] = symbol;
    }
    else {
        window.alert('Stop!This place is not empty!');
    }
    return madeMove;
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

    for (let combo of winCombo) {
        const [a, b, c] = combo;
        if (moves[a] === symbol && moves[b] === symbol && moves[c] === symbol) {
            return true;
        }
    }
    return false;
}

function switchPlayer() {
    if (current === playerX) {
        current = playerO;
    }
    else {
        current = playerX;
    }
}

