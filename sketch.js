
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Roof=new roof(800,700,80,700)
	rope= new rope(Bob.body,Roof)
	rope2= new rope(Bob2.body,Roof)
	rope3= new rope(Bob3.body,Roof)
	rope4= new rope(Bob4.body,Roof)
	Bob = new bob(100,200,20,20)
	Bob2 = new bob(110,200,20,20)
	Bob3= new bob(120,200,20,20)
	Bob4 = new bob(130,200,20,20)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



