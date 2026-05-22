/* script.js */
/* Author: Praveen kumar */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Game configuration variables
const CONFIG = {
  cellSize: 50,
  canvasWidth: 1000,
  canvasHeight: 600,
  speed: 100,
  snakeColor: "red",
  foodColor: "yellow",
  scoreColor: "pink",
  gameOverColor: "snow"
};

// Game state variables
let snakeCells = [[0, 0]];
let direction = "right";
let gameOver = false;
let score = 0;
let randomFood = [];
let gameInterval;

/**
 * Random food generate karne ka function
 */
const generateFood = () => {
  const maxCols = (CONFIG.canvasWidth - CONFIG.cellSize) / CONFIG.cellSize;
  const maxRows = (CONFIG.canvasHeight - CONFIG.cellSize) / CONFIG.cellSize;
  
  const randomX = Math.floor(Math.random() * maxCols) * CONFIG.cellSize;
  const randomY = Math.floor(Math.random() * maxRows) * CONFIG.cellSize;
  
  return [randomX, randomY];
};

/**
 * Game ka canvas aur objects draw karne ka function
 */
const draw = () => {
  if (gameOver) {
    clearInterval(gameInterval);
    ctx.fillStyle = CONFIG.gameOverColor;
    ctx.font = "40px sans-serif";
    ctx.fillText("Game Over!! Press F5 to restart", 200, 100);
    return;
  }
 
  // Canvas clear karna
  ctx.clearRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
  
  // Snake draw karna
  ctx.fillStyle = CONFIG.snakeColor;
  for (const cell of snakeCells) {
    ctx.fillRect(cell[0], cell[1], CONFIG.cellSize, CONFIG.cellSize);
  }
  
  // Score dikhana
  ctx.fillStyle = CONFIG.scoreColor;
  ctx.font = "40px sans-serif";
  ctx.fillText(`Score: ${score}`, 100, 100);
  
  // Food draw karna
  ctx.fillStyle = CONFIG.foodColor;
  ctx.fillRect(randomFood[0], randomFood[1], CONFIG.cellSize, CONFIG.cellSize);
};

/**
 * Game ki state update karne ka function (snake ki movement, food khana, boundaries)
 */
const update = () => {
  const headX = snakeCells[snakeCells.length - 1][0];
  const headY = snakeCells[snakeCells.length - 1][1];

  let newX;
  let newY;

  // Direction ke hisab se naya head calculate karna
  switch (direction) {
    case 'right':
      newX = headX + CONFIG.cellSize;
      newY = headY;
      if (newX === CONFIG.canvasWidth) gameOver = true;
      break;
    case 'left':
      newX = headX - CONFIG.cellSize;
      newY = headY;
      if (newX < 0) gameOver = true;
      break;
    case 'down':
      newX = headX;
      newY = headY + CONFIG.cellSize;
      if (newY === CONFIG.canvasHeight) gameOver = true;
      break;
    case 'up':
      newX = headX;
      newY = headY - CONFIG.cellSize;
      if (newY < 0) gameOver = true;
      break;
  }

  snakeCells.push([newX, newY]);

  // Agar snake ne food kha liya toh score badhega
  if (newX === randomFood[0] && newY === randomFood[1]) {
    randomFood = generateFood();
    score++;
  } else {
    // Agar nahi khaya toh tail remove karna
    snakeCells.shift();
  }
};

/**
 * Keyboard controls ko handle karna
 */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (e.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (e.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (e.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
});

// Game initialize karna
const init = () => {
  randomFood = generateFood();
  gameInterval = setInterval(() => {
    update();
    draw();
  }, CONFIG.speed);
};

// Start the game
init();