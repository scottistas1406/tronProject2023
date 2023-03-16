// Initialize canvas and context'canvas' refferenced in html file id
const canvas = document.getElementById("snakeCanvas");
const context = canvas.getContext("2d"); //creates context for 2d redering in canvas element

// Initialize game variables
let score = 0;
let gameSpeed = 100;
let snackSize = 10;

// Initialize snake variables
let snake = [{ x: 10, y: 10 }];
let direction = "right";
console.log(snake);

// Generate random food position
let snack = {
    x: Math.floor(Math.random() * 20) * 20,
    y: Math.floor(Math.random() * 20) * 20
};

// Draw snake and food
function draw() {
    // Clear canvas
    context.clearRect(5, 5, canvas.width, canvas.height);

    // Draw snake
    context.fillStyle = "#000";
    snake.forEach(segment => {
        context.fillRect(segment.x, segment.y, snackSize, 50);//controls size of snake change to var to adjust size.
    });

    // Draw food
    context.fillStyle = "#f00";
    context.fillRect(snack.x, snack.y, 20, 20);
    snackSize = snackSize + 10;

    // Update score
    context.fillStyle = "#000";
    context.font = "20px Arial";
    context.fillText(`Score: ${score}`, 10, 30);
}

// Move snake
function move() {
    // Update snake position based on direction
    let head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case "right":
            head.x += 20;
            break;
        case "left":
            head.x -= 20;
            break;
        case "up":
            head.y -= 20;
            break;
        case "down":
            head.y += 20;
            break;
    }
    snake.unshift(head);

    // Check if snake collided with walls or itself
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        clearInterval(intervalId);
        alert(`Game over! Your score is ${score}.`);
        location.reload();
    }

    // Check if snake ate food
    if (head.x === snackSize.x && head.y === snackSize.y) {
        score++;
        gameSpeed -= 5;
        snackSize = {
            x: Math.floor(Math.random() * 20) * 20,
            y: Math.floor(Math.random() * 20) * 20
        };
    } else {
        snake.pop();
    }
}

// Update direction based on key input
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowRight":
            if (direction !== "left") direction = "right";
            break;
        case "ArrowLeft":
            if (direction !== "right") direction = "left";
            break;
        case "ArrowUp":
            if (direction !== "down") direction = "up";
            break;
        case "ArrowDown":
            if (direction !== "up") direction = "down";
            break;
    }
});

// Start game loop
let intervalId = setInterval(() => {
    draw();
    move();
}, gameSpeed);
