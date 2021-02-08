const numCurves = 10;
let startX, startY
let points = []

function setup() {
    createCanvas(300, 600);
    startX = 0;
    startY = height;
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100);
    noLoop();
}

function draw() {

    // translate(0, height/2);
    // scale(1.5);
    background(255);
    stroke(0, 0.2);
    noStroke();

    for (let curve = 0; curve < numCurves; curve++) {
        fill(random(0, 100), random(50, 150), random(0, 100), 0.05)
        push();
        // scale(100)
        //a1, a2           c1x              c1y                                      c2x                           c2y 
        // rotate(-50)
        bezier(0, height, random(30, 150), random(5*height/7, 3*height/4), random(width / 3 - 60, width / 2 - 20), random(height / 2 - 100, height / 2 - 50), random(width / 2 + 40, 3*height/4), random(height / 2, height/4))
        pop();
    }

}