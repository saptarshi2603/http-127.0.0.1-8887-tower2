const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	polygon_img=loadImage("polygon.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
  world = engine.world;
  
  ground1=new Stand(550,310,270,12);
brick1=new greenBrick(530,280,30,40)
brick2=new greenBrick(430,280,30,40)
brick3=new greenBrick(630,280,30,40)
brick4=new pinkBrick(570,280,30,40)
brick5=new pinkBrick(470,280,30,40)
brick6=new pinkBrick(519,240,30,40)
brick7=new greenBrick(619,240,30,40)
brick8=new greenBrick(550,240,30,40)
brick9=new greenBrick(480,240,30,40)

ground2=new Stand(900,310,270,12);
brick10=new yellowBrick(500,200,30,40)
brick11=new yellowBrick(600,200,30,40)
brick12=new yellowBrick(900,280,30,40)
brick13=new greenBrick(860,280,30,40)
brick14=new pinkBrick(820,280,30,40)
brick15=new pinkBrick(780,280,30,40)
brick16=new blueBrick(950,280,30,40)
brick17=new blueBrick(920,240,30,40)
brick18=new blueBrick(870,240,30,40)
brick19=new blueBrick(830,240,30,40)
brick20=new pinkBrick(790,240,30,40)
brick21=new yellowBrick(850,200,30,40)

polygoln=new polygon(50,200,20)
slingshot=new SlingShot(polygoln.body,{x:100,y:200})

Engine.run(engine); 
   Engine.update(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
ground1.display()
brick1.display();
brick2.display();
 brick3.display();
 brick4.display();
 brick5.display()
 brick6.display()
 brick7.display()
 brick8.display()
 brick9.display();

 ground2.display();
 brick10.display();
 brick11.display()
 brick12.display()
 brick13.display()
 brick14.display()
 brick15.display()
 brick16.display()
 brick17.display()
 brick18.display()
 brick19.display()
 brick20.display()
 brick21.display()
 polygoln.display()
 slingshot.display()
  drawSprites();
 
}
function mouseDragged()
{
  Matter.Body.setPosition(polygoln.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
slingshot.fly()
}




function keypressed(){
if(keycode===32){
 slingshot.attach(this.polygoln);

}

}
