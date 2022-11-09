let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let x1 = 150;
let y1 = 250;

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
    ctx.strokeRect(550, 250, 100, 100);

    requestAnimationFrame(draw)
}

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.code == "ArrowLeft") {
        x1 -= 5;
    } else if (event.code == "ArrowRight") {
        x1 += 5;
    } else if (event.code == "ArrowRight") {
        x1 += 5;
    } else if (event.code == "ArrowUp") {
        y1 -= 5;
    } else if (event.code == "ArrowDown") {
        y1 += 5;
    }
    // add diagonal

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
}