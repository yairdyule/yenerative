const threshold = 0.4;
let radius = 1;
let size = 5;
let start;
let increment = 5;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100, 100);
    start = {
        x: random(width / 3, 2 * width / 3),
        y: random(height / 3, 2 * height / 3)
    }
}

function draw() {
    translate(start.x, start.y);
    noFill();
    for (let c = 0; c < 360*3; c += increment) {
        circle(0.3*radius * cos(c), radius * sin(c), size);
        radius += 0.75
        size = map(c, 0, 360 * 4, 2, 80)
        increment = map(c, 0, 360 * 3, 1, 10)
    }

}