/**
 * Snake Master - Production Grade Logic
 * Refactored from web_4thSem reference
 */

// Configuration Constants
const CONFIG = {
    CELL_SIZE: 50,
    INITIAL_SPEED: 150,
    CANVAS_WIDTH: 1000,
    CANVAS_HEIGHT: 600,
    COLORS: {
        SNAKE: '#0f3460',
        SNAKE_HEAD: '#e94560',
        FOOD: '#ff9d00',
        TEXT: '#snow'
    }
};

class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.pen = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score');
        this.highScoreElement = document.getElementById('high-score');
        this.overlay = document.getElementById('overlay');
        this.finalScoreElement = document.getElementById('final-score');
        this.restartBtn = document.getElementById('restart-btn');

        this.highScore = localStorage.getItem('snakeHighScore') || 0;
        this.highScoreElement.textContent = this.highScore;

        this.init();
        this.setupEventListeners();
    }

    init() {
        this.snakeCell = [[0, 0]];
        this.direction = 'right';
        this.nextDirection = 'right';
        this.gameOver = false;
        this.score = 0;
        this.food = this.generateFood();
        this.scoreElement.textContent = this.score;
        this.overlay.classList.add('hidden');
        
        if (this.gameInterval) clearInterval(this.highScoreInterval);
        this.startGameLoop();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.restartBtn.addEventListener('click', () => this.init());
    }

    handleKeyDown(e) {
        const key = e.key;
        // Prevent 180 degree turns
        if (key === 'ArrowUp' && this.direction !== 'down') this.nextDirection = 'up';
        else if (key === 'ArrowDown' && this.direction !== 'up') this.nextDirection = 'down';
        else if (key === 'ArrowLeft' && this.direction !== 'right') this.nextDirection = 'left';
        else if (key === 'ArrowRight' && this.direction !== 'left') this.nextDirection = 'right';
    }

    generateFood() {
        let newFood;
        while (true) {
            newFood = [
                Math.floor(Math.random() * (CONFIG.CANVAS_WIDTH / CONFIG.CELL_SIZE)) * CONFIG.CELL_SIZE,
                Math.floor(Math.random() * (CONFIG.CANVAS_HEIGHT / CONFIG.CELL_SIZE)) * CONFIG.CELL_SIZE
            ];
            // Ensure food doesn't spawn on snake
            const onSnake = this.snakeCell.some(cell => cell[0] === newFood[0] && cell[1] === newFood[1]);
            if (!onSnake) break;
        }
        return newFood;
    }

    update() {
        if (this.gameOver) return;

        this.direction = this.nextDirection;
        const head = this.snakeCell[this.snakeCell.length - 1];
        let newX = head[0];
        let newY = head[1];

        if (this.direction === 'right') newX += CONFIG.CELL_SIZE;
        else if (this.direction === 'left') newX -= CONFIG.CELL_SIZE;
        else if (this.direction === 'down') newY += CONFIG.CELL_SIZE;
        else if (this.direction === 'up') newY -= CONFIG.CELL_SIZE;

        // Collision Detection: Walls
        if (newX < 0 || newX >= CONFIG.CANVAS_WIDTH || newY < 0 || newY >= CONFIG.CANVAS_HEIGHT) {
            return this.endGame();
        }

        // Collision Detection: Self
        if (this.snakeCell.some(cell => cell[0] === newX && cell[1] === newY)) {
            return this.endGame();
        }

        this.snakeCell.push([newX, newY]);

        // Collision Detection: Food
        if (newX === this.food[0] && newY === this.food[1]) {
            this.score++;
            this.scoreElement.textContent = this.score;
            this.food = this.generateFood();
            // Optional: Increase speed as score increases
        } else {
            this.snakeCell.shift();
        }
    }

    draw() {
        // Clear Canvas
        this.pen.clearRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);

        // Draw Food
        this.pen.fillStyle = CONFIG.COLORS.FOOD;
        this.pen.shadowBlur = 15;
        this.pen.shadowColor = CONFIG.COLORS.FOOD;
        this.pen.fillRect(this.food[0], this.food[1], CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
        this.pen.shadowBlur = 0; // Reset shadow

        // Draw Snake
        this.snakeCell.forEach((cell, index) => {
            const isHead = index === this.snakeCell.length - 1;
            this.pen.fillStyle = isHead ? CONFIG.COLORS.SNAKE_HEAD : CONFIG.COLORS.SNAKE;
            
            // Subtle border for cells
            this.pen.strokeStyle = CONFIG.COLORS.CANVAS_BG;
            this.pen.lineWidth = 2;
            
            this.pen.fillRect(cell[0], cell[1], CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
            this.pen.strokeRect(cell[0], cell[1], CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
        });
    }

    endGame() {
        this.gameOver = true;
        clearInterval(this.gameInterval);
        
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('snakeHighScore', this.highScore);
            this.highScoreElement.textContent = this.highScore;
        }

        this.finalScoreElement.textContent = this.score;
        this.overlay.classList.remove('hidden');
    }

    startGameLoop() {
        this.gameInterval = setInterval(() => {
            this.update();
            this.draw();
        }, CONFIG.INITIAL_SPEED);
    }
}

// Initialize Game
new SnakeGame();
