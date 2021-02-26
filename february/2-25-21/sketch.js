let numrows = 50
let numcols = 50
let sqrsize = 10;
let sqrinc = 1.5;
let noiseinc = 0.0075;
let noiseoff = 0.00001;
let coloroff = 0.1;
let colorinc = 0.0000075;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 100, 100, 100, 1);
    noStroke();
    
}

function draw() {
    background(255);
    noiseDetail(4, 0.05);
    // noLoop();
    for (let x = 0; x < (width); x += (width / numcols))
    {
        for (let y = 0; y < (height); y+=(height/numrows)) {
            fill(map(noise(coloroff,x,y), 0,1,75,100), 80, 80, map(noise(noiseoff,x,y), 0, 1, 0.3, 1));
            ellipse(x, y, sqrsize, sqrsize);
            coloroff += colorinc;    
        }
    }
    noiseoff += noiseinc;
}