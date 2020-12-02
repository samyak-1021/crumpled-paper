
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1;
var ground1;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,100,20,20);
	dustbin1 = new Dustbin(100,375,100,20);
	dustbin2 = new Dustbin(75,365,20,100);
	dustbin3 = new Dustbin(125,365,20,100);
	ground1 = new Ground(200,375,400,5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keypressed();
  drawSprites();
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function keypressed(){
	if(keyCode===UP_ARROW){
    Matter.body.appleForce(Paper.body,Paper.body.position,{x:85,y:-85});
	}
}

