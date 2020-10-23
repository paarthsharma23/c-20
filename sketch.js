var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 200, 50, 90);
 fixedRect.shapeColor= "purple";
 movingRect= createSprite(600, 200, 90, 50);
 movingRect.shapeColor= "purple";
}

function draw() {
  background(255,255,255);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(movingRect.x- fixedRect.x< movingRect.width/2+ fixedRect.width/2
  && fixedRect.x - movingRect.x<movingRect.width/2+ fixedRect.width/2
  &&movingRect.y- fixedRect.y< movingRect.height/2+ fixedRect.height/2
  && fixedRect.y- movingRect.y< movingRect.height/2+ fixedRect.height/2){

movingRect.shapeColor= "yellow";
fixedRect.shapeColor="yellow";
} 
else{
  movingRect.shapeColor= "purple";
  fixedRect.shapeColor = "purple";
}
  drawSprites();
}