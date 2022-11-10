let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let x1 = 150;
let y1 = 250;
let x2 = 550;
let y2 = 250;

requestAnimationFrame(draw);
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.beginPath;
    ctx.strokeStyle = "rgb(0, 0, 255)";
    ctx.lineWidth = 4;
    ctx.strokeRect(x1, y1, 100, 100);

    ctx.strokeStyle = "rgb(0, 255, 0)";
    ctx.lineWidth = 4;
    ctx.strokeRect(x2, y2, 100, 100);

    requestAnimationFrame(draw)
}

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    // Blue Box Movement
    if (event.code == "ArrowLeft") {
        x1 -= 5;
    } else if (event.code == "ArrowRight") {
        x1 += 5;
    } else if (event.code == "ArrowUp") {
        y1 -= 5;
    } else if (event.code == "ArrowDown") {
        y1 += 5;
    }

    // Green Box Movement
    if (event.code == "KeyA") {
        x2 -= 5;
    } else if (event.code == "KeyD") {
        x2 += 5;
    } else if (event.code == "KeyW") {
        y2 -= 5;
    } else if (event.code == "KeyS") {
        y2 += 5;
    }

    // Blue Box Boundaries
    if (x1 <= 0) {
        x1 = 0;
    } else if (y1 <= 0) {
        y1 = 0;
    } else if (x1 >= 700) {
        x1 = 700;
    } else if (y1 >= 500) {
        y1 = 500;
    } 

    if (x1 <= 0 && y1 <= 0) {
        x1 = 0;
        y1 = 0;
    } else if (x1 <= 0 && y1 >= 500) {
        x1 = 0;
        y1 = 500;
    } else if (x1 >= 700 && y1 <= 0) {
        x1 = 700;
        y1 = 0;
    } else if (x1 >= 700 && y1 >= 500) {
        x1 = 700;
        y1 = 500;
    }

    // Green Box Boundaries
    if (x2 <= -100) {
        x2 = 800;
    } else if (y2 <= -100) {
        y2 = 600;
    } else if (x2 >= 800) {
        x2 = -100;
    } else if (y2 >= 600) {
        y2 = -100;
    }
}