const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0

function preload(){
    pimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground (500,290,400,20)
    b1 = new Box(400,275,30,40)
    b2 = new Box(430,275,30,40)
    b3 = new Box(460,275,30,40)
    b4 = new Box(490,275,30,40)
    b5 = new Box(520,275,30,40)
    b6 = new Box(550,275,30,40)
    b7 = new Box(580,275,30,40)

    b8 = new Box(430,235,30,40)
    b9 = new Box(460,235,30,40)
    b10 = new Box(490,235,30,40)
    b10 = new Box(520,235,30,40)
    b11 = new Box(550,235,30,40)

    b12 = new Box(460,195,30,40)
    b13 = new Box(490,195,30,40)
    b14 = new Box(520,195,30,40)
    b15 = new Box(550,195,30,40)
    b16 = new Box(490,165,30,40)
   
  polygon = Bodies.circle(50,200,20)
  World.add(world,this.polygon)
    
  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    ground.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()

    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();
    text("SCORE : "+score,750,40);
    imageMode(CENTER)
    image(pimg,this.polygon.position.x,this.polygon.position.y,40,40);

    slingShot.display()


    
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    slingShot.fly()
}
function keyPressed() {
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
