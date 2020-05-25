var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";

  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "green";

 // obj3 = createSpite(300,100,50,50);
  //obj3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obj1)){

      movingRect.shapeColor = "red";
      obj1.shapeColor = "red";
  }
  else{

    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(obj1,obj2){
 if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    
      return true;
  }
else {
      return false;
  }
}
