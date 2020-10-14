var ball;
var bat;

function setup() {
  createCanvas(800,400);
 ball =  createSprite(400, 200, 20, 20);
 ball.shapeColor = "red";
 //ball.debug = true;
 bat = createSprite(600,300,40,40);
 bat.shapeColor = "red";
 //bat.debug = true;
}

function draw() {
  background(0); 
  bat.x = World.mouseX;
  bat.y = World.mouseY;
  
  if(ball.x - bat.x < ball.width/2 + bat.width/2 && bat.x - ball.x < bat.width/2 + ball.width/2 
    && ball.y - bat.y < ball.height/2 + bat.height/2 && bat.y - ball.y < bat.height/2 + ball.height/2 ){
    ball.shapeColor = "yellow";
    bat.shapeColor = "blue";
  } else {
    ball.shapeColor = "red";
    bat.shapeColor = "red";
  }
  
  drawSprites();
}