/**
 * Tic-Tac-Toe Ultimate Engine
 * Refactored from web_4thSem reference
 */

class TicTacToe {
    constructor() {
        this.board = document.getElementById('board');
        this.cells = document.querySelectorAll('.cell');
        this.resetBtn = document.getElementById('reset-btn');
        this.modal = document.getElementById('modal');
        this.winnerMsg = document.getElementById('winner-msg');
        this.playAgainBtn = document.getElementById('play-again-btn');
        this.p1Card = document.getElementById('p1-card');
        this.p2Card = document.getElementById('p2-card');

        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        this.init();
        this.setupListeners();
    }

    init() {
        this.currentPlayer = 'x';
        this.gameState = ["", "", "", "", "", "", "", "", ""];
        this.isGameActive = true;
        
        this.cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove('x', 'o');
        });

        this.modal.classList.add('hidden');
        this.updatePlayerCards();
    }

    setupListeners() {
        this.board.addEventListener('click', (e) => {
            const cell = e.target;
            if (!cell.classList.contains('cell')) return;
            
            const index = cell.getAttribute('data-index');
            this.handleCellClick(cell, index);
        });

        this.resetBtn.addEventListener('click', () => this.init());
        this.playAgainBtn.addEventListener('click', () => this.init());
    }

    handleCellClick(cell, index) {
        if (this.gameState[index] !== "" || !this.isGameActive) return;

        this.gameState[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer.toUpperCase();
        cell.classList.add(this.currentPlayer);

        if (this.checkWin()) {
            this.endGame(false);
        } else if (this.checkDraw()) {
            this.endGame(true);
        } else {
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
            this.updatePlayerCards();
        }
    }

    checkWin() {
        return this.winningCombinations.some(combination => {
            return combination.every(index => {
                return this.gameState[index] === this.currentPlayer;
            });
        });
    }

    checkDraw() {
        return this.gameState.every(cell => cell !== "");
    }

    updatePlayerCards() {
        if (this.currentPlayer === 'x') {
            this.p1Card.classList.add('active');
            this.p2Card.classList.remove('active');
        } else {
            this.p2Card.classList.add('active');
            this.p1Card.classList.remove('active');
        }
    }

    endGame(isDraw) {
        this.isGameActive = false;
        if (isDraw) {
            this.winnerMsg.textContent = "It's a Stalemate!";
        } else {
            this.winnerMsg.textContent = `Player ${this.currentPlayer.toUpperCase()} Wins!`;
        }
        this.modal.classList.remove('hidden');
    }
}

// Start Game
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
