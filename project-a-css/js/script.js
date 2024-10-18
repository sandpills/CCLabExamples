console.log("i am javascript");

function hoverText() {
    alert('surprise! i am also a frog');
}

function clickButton() {
    console.log('clicked!');
    alert('i am a frog!')
}

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("p5-canvas-container");
}

function draw() {
    background(250);
    circle(mouseX, mouseY, 20);
}