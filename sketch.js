var wall,thickness;

var bullet,speed,weight;

function setup() 
{
  createCanvas(1600,400);

  speed=random(223,321);

  weight=random(30,52);

  bullet1=createSprite(50, 200, 20, 20);

  bullet1.shapeColor="white";

  bullet1.velocityX=6;

  wall1=createSprite(800,200,thickness,90);

  wall1.shapeColor="blue";

  thickness=random(22,83);

  bullet2=createSprite(100,350,20,20);

  bullet2.shapeColor="white";

  bullet2.velocityX=6;

  wall2=createSprite(800,350,90,thickness);

  wall2.shapeColor="blue";

  thickness=random(22,83);
  }

function draw()
{
  background("black");  

  if(wall1.x-bullet1.x<wall1.width/2+bullet1.width/2)
  {
    bullet1.velocityX=0;
    var damage=0.5*weight *speed*speed /(thickness*thickness*thickness);

    if(damage>10)
    {
      bullet1.shapeColor="red";
    }
    if (damage<10)
    {
      bullet1.shapeColor="green";
    }
  }

  if(wall2.x-bullet2.x<wall2.width/2+bullet2.width/2)
  {
    bullet2.velocityX=0;
    var damage=0.5*weight *speed*speed /(thickness*thickness*thickness);

    if(damage>10)
    {
      bullet2.shapeColor="green";
    }
    if (damage<10)
    {
      bullet2.shapeColor="red";
    }
  }
  drawSprites();
} 