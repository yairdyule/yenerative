function setup() {
    createCanvas(500, 500);

}

function draw() {
    translate(width / 2, height / 2);
    beginShape();
    vertex(-100, 50)
    vertex(-100, 50)
    vertex(0, 50);
    vertex(100, 0);
    vertex(0, -50);
    endShape(CLOSE);
}