const numCircles = 5;
var orbitRadius = 100;
var radius = 40;
const noiseInc = 0.01;
var threshold;

let noiseOff = 0;

function setup() {
    createCanvas(400, 500);
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100, 1)
    noLoop();
}

function draw() {
    noStroke();
    translate(width / 2, height / 2);
    background(random(0, 100), 60, 50, 0.35);
    
    for (let c = 0; c < numCircles; c++) {
        orbitRadius = random(20, 150);
        radius = map(orbitRadius, 20, 150, 20, 50);
        fill(random(0, 100), 60, 50, 0.5);
        let startAngle = random(0, 360);
        threshold = random(0.25, 0.45)
        for (let angle = startAngle; angle < startAngle + 360; angle += 50) {
            if (random() < threshold) {
                circle(0 + orbitRadius * cos(angle), 0 + orbitRadius * sin(angle), radius);
            }
        }
        noiseOff += noiseInc;
    }
}