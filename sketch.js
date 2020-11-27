
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1, box2, box3;
var ground;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
	}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	 
	box2=createSprite(340,580,20,100); 
	box2.addImage(dustbinImage)
	box2.scale=0.5

	ground=new Ground(width/2, height-35, width,10)

	boxcenter=new DustBin(355,650,85,20);
	boxleft=new DustBin(300,620,10,90);
	boxright=new DustBin(390,620,10,90);

	paper=new Paper(50,100,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  paper.display()
  ground.display()
  boxcenter.display();
  boxleft.display();
  boxright.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});

	}

}

