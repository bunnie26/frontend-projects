const cnavas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let score = 0;
const box = 32;

const ground = new Image();
ground.src = "images/ground.png";

const foodImg = new Image();
foodImg.src = "images/food.png";

// audio

const dead = new Audio();
const eat = new Audio();
const left = new Audio();
const right = new Audio();
const up = new Audio();
const down = new Audio();

dead.src = "audio/audio_dead.mp3";
eat.src = "audio/audio_eat.mp3";
left.src = "audio/audio_left.mp3";
right.src = "audio/audio_right.mp3";
up.src = "audio/audio_up.mp3";
down.src = "audio/audio_down.mp3";
//snake

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};
// food

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};
// control snake
document.addEventListener("keydown", direction);

let d;
function direction(event) {
  if (event.keyCode == 37 && d != "RIGHT") {
    d = "LEFT";
    left.play();
  } else if (event.keyCode == 38 && d != "DOWN") {
    d = "UP";
    up.play();
  } else if (event.keyCode == 39 && d != "LEFT") {
    d = "RIGHT";
    right.play();
  } else if (event.keyCode == 40 && d != "UP") {
    d = "DOWN";
    down.play();
  }
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      returntrue;
    }
  }
  return false;
}

function draw() {
  ctx.drawImage(ground, 0, 0);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.drawImage(foodImg, food.x, food.y);

  //old head
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //remove tail

  if (d == "LEFT") snakeX -= box;
  if (d == "UP") snakeY -= box;
  if (d == "RIGHT") snakeX += box;
  if (d == "DOWN") snakeY += box;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    eat.play()
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
  } else {
    snake.pop();
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  if (
    snakeX < box ||
    snakeX > 17 * box ||
    snakeY < 3 * box ||
    snakeY > 17 * box ||
    collision(newHead, snake)
    
  ) {
    clearInterval(game);
    dead.play()
  }

  snake.unshift(newHead);
  ctx.fillStyle = "white";
  ctx.font = "45px Changa one";
  ctx.fillText(score, 2 * box, 1.6 * box);
}

let game = setInterval(draw, 150);

