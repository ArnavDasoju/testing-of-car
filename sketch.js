var movingrect,fixedrect;
var gameobject1,YellowObject,Snowball;

function setup() {
  createCanvas(1200,800);
  
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "orange";

  movingrect = createSprite(500, 600, 80, 80);
  movingrect.shapeColor = "green";

gameobject1 = createSprite (900,500,40,90);
gameobject1.shapeColor = "blue";

YellowObject = createSprite (100,300,40,70);
YellowObject.shapeColor = "yellow"

Snowball = createSprite (1000,200,50,50);
Snowball.shapeColor = "white"
}



function draw() {
  background("black");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  //YellowObject.x = World.mouseX;
  //YellowObject.y = World.mouseY;

  //Passing the values to the Function 
if(isTouching (movingrect,YellowObject)) 
 {
  movingrect.shapeColor = "red";
  YellowObject.shapeColor = "red";
 }
 else 
 {
  movingrect.shapeColor = "green";
  YellowObject.shapeColor = "green";
 }


  drawSprites();
}




