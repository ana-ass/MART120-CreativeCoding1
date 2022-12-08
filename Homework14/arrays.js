var x = 50;
var y = 50;
var diameter = 25;

var length = 800;
var width = 600;

var mousex = 0;
var mousey = 0;

//var objectx = 100;
//var objecty = 100;

var shapeX = 40;
var shapeY = 60;

var shapeXs = [];
var shapeYs = [];
var diametershape = [];

var shapeXspeed = [];
var shapeYspeed = [];

//var ranColor = ['maroon', 'green', 'olive', 'teal', 'fuchsia', 'silver'];
//var ranIndex = Math.floor(Math.random() * ranColor.length);
//var randomColors = ranColor[ranIndex];
let r, g, b;
//var r;
//var g;
//var b;
//var a;

//var flag = 0;

function setup() 
{
    createCanvas(800, 600);
    for (var i = 0; i < 15; i++){
        shapeXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(800);
        shapeYs[i] = getRandomNumber(600);
        diametershape[i] = getRandomNumber(35);
    }
    
}

function draw() {
background (120);
CreatePlayer();
movePlayer(); 

r = random(255);
g = random(255);
b = random(255);

for (var i = 0; i < shapeXs.length; i++){
    fill(r, g, b);
    circle(shapeXs[i], shapeYs[i], diametershape[i]);
    shapeXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeXs[i] += shapeXspeed[i];
    shapeYs[i] += shapeYspeed[i];

    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height){
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0){
        shapeYs[i] = height;
    }

}

mouseShape();
createExit();
winMessage();
createBorder();

}


function CreatePlayer()
{
    fill(24, 200, 29);
    circle(x, y, diameter);
}

function movePlayer()
{
    if (x > 800)
{
    x = 50;
}
    if (keyIsDown(83))
    {
        y += 10;
    }
    else if (keyIsDown(87))
    {
        y -= 10;
    }
    
    if (y > 600)
    {
        y = 50;
    }
        if (keyIsDown(68))
        {
            x += 10;
        }
        else if (keyIsDown(65))
        {
            x -= 10;
        }
}

function mouseShape()
{
fill(95, 128, 75)
ellipse(mousex, mousey, 125, 55);
}

function createExit()
{
    fill(255, 255, 255)
    square(750, 521, 55);
    textSize(20)
    text("EXIT", 750, 521)
}

function winMessage()
{
    if(x > 750 && y > 521)
    {
        fill (0);
        stroke(2);
        textSize(45);
        text("Congrats! You win!", 200, 300);
    }
}

function createBorder()
{
    fill(0);
    stroke(0);
    rect(0, 0, 800, 10);
    rect(0, 0, 10, 800);
    rect(0, 590, 800, 10);
    rect(790, 0, 10, 500);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}