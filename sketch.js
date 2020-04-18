var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  fixedRect = createSprite(300,100,50,100);
  fixedRect.shapeColor = "Green";
  fixedRect.debug = true;

  movingRect = createSprite(300,300,100,50);
  movingRect.shapeColor = "Green";
  movingRect.debug = true;

  movingRect.velocityY = -4;
  fixedRect.velocityY = 4;
}

function draw() {
  background(255,255,255);

  /*movingRect.x = mouseX;
  movingRect.y = mouseY;*/

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }
    if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
        movingRect.velocityY = movingRect.velocityY*(-1);
        fixedRect.velocityY = fixedRect.velocityY*(-1);
      }
    
  drawSprites();
}