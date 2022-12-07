var x = 50;
var y = 50;
var diameter = 25;

var mousex = 0;
var mousey = 0;

var objectx = 100;
var objecty = 100;

var obstx = 50;
var obsty = 50;
var movement;

function setup() 
{
    createCanvas(800, 600);
    movement = Math.floor(Math.random() * 10) + 1;
}
function draw() {
background (120);
fill(24, 200, 29);
circle(x, y, diameter);

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

fill(23, 79, 200)
 square(objectx, objecty, 55);
    if (objectx <= 800)
    {
        objectx += 10;
    } else if (objectx == 800 || objectx <= 800){
        objectx += 2;
        console.log("second else if for objectx");
    } else if (objectx != 800){
        objectx = 50;
    }

    if (objecty <= 600) {
        objecty += 2;
    } else if (objecty == 600 || objecty <= 600){
        objecty += 1;
        console.log("second else if for objecty");
    } else if (objecty != 600){
        objecty = 25;
    }

square(obstx, obsty, 128)
    if(obstx <= 800)
    {
        obstx += 5;
    } else if (obstx == 800 || obstx <= 0){
        obstx += 5;
        movement *= -1;
        console.log("second else if for obstx");
    } else if (obstx != 800){
        obstx = 25;
    }

    if (obsty <= 600) {
        obsty += 3;
    } else if (obsty == 600 || obsty <= 600){
        obsty += 4;
        console.log("second else if for obsty");
    } else if (obsty != 600){
        obsty = 15;
    }
obstx += movement;

fill(95, 128, 75)
ellipse(mousex, mousey, 125, 55);

fill(255, 255, 255)
square(750, 521, 55);
textSize(20)
text("EXIT", 750, 521)

if(x > 750 && y > 521)
{
    fill (0);
    stroke(2);
    textSize(45);
    text("Congrats! You win!", 200, 300);
}
}





function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}