const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper, ground, dustbin;
var options;
var boxPosition, boxY;
var paperImg;

function preload() {
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

	paperObject = new Paper(200,430,70);
	//paperObject.addImage("paper.png",paperImg);
	ground = new Ground(700,480,1500,20);
	dustbin = new Dustbin(1200,650);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paperObject.display();
  ground.display();
  dustbin.display();

  var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });

  //paperObject.collide(ground);

  Engine.run(engine);
  Render.run(render);
  
  keyPressed();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-85});
	}
}