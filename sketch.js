var rect1,mrect;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(300, 300, 50, 50);
  mrect = createSprite(100, 100, 50, 50);
  mrect.shapeColor="black";
  rect1.shapeColor = "black"; 
}

function draw() {
  background(255,255,255); 

  mrect.y = World.mouseY;

  mrect.x = World.mouseX;
  if(mrect.x-rect1.x<rect1.width/2+mrect.width/2
   &&rect1.x-mrect.x<rect1.width/2+mrect.width/2
   &&rect1.y-mrect.y<rect1.height/2+mrect.height/2
   &&mrect.y-rect1.y<rect1.height/2+mrect.height/2){
   mrect.shapeColor="red";
   rect1.shapeColor = "blue";  
  }
  else{
    mrect.shapeColor="black";
    rect1.shapeColor = "black"; 
  }

  drawSprites();
}