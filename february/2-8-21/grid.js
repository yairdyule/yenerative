const resolution = 20;
var numColumns, numRows;
let z = 0;
let noiseInc = 0.005;
function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    angleMode(DEGREES);
    colorMode(HSB, 100, 100, 100, 100);
    numColumns = width / resolution;
    numRows = height / resolution;
    // noLoop();
    noiseDetail(.5)
    noStroke();
}

function draw() {
    background(255);
    const grid = Array.from({ length: numRows }, () =>
        Array.from({length:numColumns}, () => false)
    )

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            // grid[x][y] = map(noise(x,y,z),0,1,-180,180)
            grid[x][y] += map(noise(x,y,z),0,1,-360,360) //option 1
        }
    }
    
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            // grid[x][y] = map(noise(x,y,z),0,1,-360,360) //option 2
            push(); 
            let squareSize = map(noise(x,y,z),0,1,20,25)
            translate((x * width / resolution), y * height / resolution);
            rotate(grid[x][y]);
            fill(map(noise(x,y,z),0,1,0,100), 80, 60, 50)
            rect(0, 0, squareSize, squareSize);
            pop();            
        }
    }
    z+=noiseInc
}