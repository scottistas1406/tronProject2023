// Initialize canvas and context
let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw a rectangle
let xmove = 5
let ymove = 5
ctx.fillStyle = "#f0";
for (let i = 0; i > canvas )
    ctx.fillRect(500, 50, 100, 10);

// Draw a circle
ctx.fillStyle = "#0f0";
ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.fill();

// Draw text
ctx.fillStyle = "#00f";
ctx.font = "bold 20px Arial";
ctx.fillText("Hello, world!", 100, 300);
