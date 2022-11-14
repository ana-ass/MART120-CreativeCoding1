var x = 100;
var y = 100;

var eyelidY = 145;
var eyelidDirection = 1;

var size = 20
var count = 0;
var sizeDirection = 2;

var handX = 382;
var handDirection = 2;

var bodyY =  243;
var bodyDirection = 4

var legsX = 119
var legsDirection = 5;

var eyeX = 254;
var eyeY = 155;

var movement;

function setup()
{
    createCanvas (500, 600);
    movement = Math.floor(Math.random() * 10) + 1;

}
function draw()
{
    background(120);
    fill(255, 204, 153)
    //head
    ellipse(220,150, 185, 195)
    //body
    fill(0, 0, 0)
    rect(120, bodyY, 200, 300)
    bodyY += bodyDirection;
    if(bodyY <=243 || bodyY >= 263)
    {
        bodyDirection *= -1;
    }
    //chin
    fill(255, 204, 153)
    noStroke();
    triangle(166, 230, 270, 230, 223, 260 )
    fill(0, 0, 0)
    point(176, 145);
    point(269, 145);
    //eyelids
    stroke('black');
    strokeWeight(12)
    line(163, eyelidY, 193, eyelidY);
    line(243, 145, 273, 145);
    eyelidY += eyelidDirection;
    if(eyelidY <= 145 || eyelidY >= 155 )
    {
        eyelidDirection *= -1;
    }
    //eyeballs
    strokeWeight(2);
    strokeWeight(20);
    point(179, 155)
    point(eyeX, eyeY)
    if(eyeX >= 257 || eyeX <= 237)
    {
        movement *= -1;
    }
    eyeX += movement;
    if(eyeY <=135 || eyeY >= 175)
    {
        movement *= -1;
    }
    eyeY += movement;
    strokeWeight(2)
    line(163, 164, 193, 164)
    line(243, 164, 273, 164)
    fill(255, 255, 255)
    triangle(178, 198, 258, 198, 220, 220)
    strokeWeight(45)
    //arms
    line(297, 257, 387, 430)
    line(388, 433, 432, 242)
    line(135, 257, 47, 602 )
    strokeWeight(2)
    //hand
    fill(255, 204, 153)
    rect(handX, 179, 85, 95)
    handX += handDirection;
    if(handX <= 372 || handX >= 392)
    {
        handDirection *= -1;
    }
    line(403, 181, 403, 217)
    line(427, 181, 427, 217)
    stroke(255, 204, 153)
    strokeWeight(20)
    line(441, 190, 421, 111)
    line(457, 190, 478, 111 )
    strokeWeight(2)
    stroke(0, 0, 0)
    line(464, 204, 416, 224)
    //legs
    fill('blue')
    rect(legsX, 540, 200, 300)
    legsX += legsDirection;
    if(legsX <= 119 || legsX >= 139)
    {
        legsDirection *= -1;
    }
    //hair
    fill('brown')
    triangle(158, 80, 191, 85, 127, 148 )
    triangle(141, 80, 176, 73, 124, 150 )
    fill(255, 255, 153)
    triangle(141, 80, 176, 73, 196, 27 )
    triangle(158, 73, 219, 43, 216, 121 )
    triangle(192, 64, 255, 29, 280, 146)
    triangle(172, 58, 295, 48, 315, 162 )
    noFill();
    rect(153, 130, 50, 50)
    rect(232, 130, 50, 50)
    line(203,155, 231, 155)
    //text
    fill('white')
    strokeWeight(1)
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count >5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Anabel Assante", 12, 580)
}
