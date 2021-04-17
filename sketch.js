const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var wall1, wall2, wall3, wall4, wall5
var copper;
var trys = 0;

  


function preload(){
  polygon_img=loadImage("polygon.png");
  copper=loadImage("Copper.jpg");
  
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
  stand2 = new Stand(800,200,200,10);
 
  //level one
  block1 = new Block(400,275,30,40);
  
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //level two
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //level three
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //top
  block16 = new Block(490,155,30,40);

  block17 = new Block(710,170,30,40);
  block18 = new Block(740,170,30,40);
  block19 = new Block(770,170,30,40);
  block20 = new Block(800,170,30,40);
  block21 = new Block(830,170,30,40);
  block22 = new Block(860,170,30,40);
  block23 = new Block(890,170,30,40);

  block24 = new Block(740,140,30,40);
  block25 = new Block(770,140,30,40);
  block26 = new Block(800,140,30,40);
  block27 = new Block(830,140,30,40);
  block28 = new Block(860,140,30,40);

  block29 = new Block(770,110,30,40);
  block30 = new Block(800,110,30,40);
  block31 = new Block(830,110,30,40);

  block32 = new Block(800,80,30,40);

 
  

  wall9 = new wall(800,340,100,100);
  wall10 = new wall(800,340,50,50);
  wall11 = new wall(700,340,100,100);
  wall12 = new wall(700,340,50,50);

  wall14 = new wall(300,340,50,50);
  


  polygon = new Bird(150,250) 

  slingshot = new sling(polygon.body,{x:200,y:250})

 
  
  console.log(polygon)
  

}
function draw() {
  background(copper); 
  
  fill("white");
  text("Press Space to Retry",200,50);
  text("Number's of Trys → ",500,50);
  
  fill("Red")
  stroke(5)
  textSize(20); 
  text(trys,610,54)
  
  fill("lightyellow");
  


  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall14.display();
  
  
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("green");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill("black");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill("green");
  block29.display();
  block30.display();
  block31.display();
  
  fill("black");
  block32.display();
  

  fill("red");
  
  
  slingshot.display();
  polygon.display();

  
 
 
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
      
      slingshot.attach(polygon.body);
      trys = trys + 1
  }
}