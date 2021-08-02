const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computer,Playerbase,computerbase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
player = new Player(300,400,60,270)
computer = new Player(1200,400,60,270)
Playerbase = new PlayerBase(300,620,230,200);
computerBase = new ComputerBase(1200,620,230,200);
 }
function draw() {
  
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  
   //display Player and computerplayer
   player.display();
   computer.display();
  Playerbase.display();
  computerBase.display();
  
}
