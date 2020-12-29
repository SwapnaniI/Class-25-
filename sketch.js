
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var bin1,bin2,bin3,binImg;

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Bodies 

	ground=new Ground();
	paper=new Paper(15);
	bin1=new Bin(600,670,100,10,true);
	bin2=new Bin(545,635,10,100,true);
	bin3=new Bin(655,635,10,100,true);
	binImg=new BinImg(700,625,110,110,true)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(191, 191, 191);
 
//Display
  ground.display();
  paper.display();
//   bin1.display();
//   bin2.display();
//   bin3.display();
  binImg.display();
  //Calling functions
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode===UP_ARROW){
    //Limiting the movement
	 if(paper.body.position.x<300){
	  Matter.Body.applyForce(paper.body,paper.body.position,{y:-3,x:1.2})
	 }
	 else{
		Matter.Body.applyForce(paper.body,paper.body.position,{y:0,x:0})
	 }
		

	}
	
	
  }

