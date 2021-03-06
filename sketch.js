const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon,polygon_img;

function setup(){
 createCanvas(1300, 600);
 engine = Engine.create();
 world = engine.world;

 text("DRAG THE POLYGONAL STONE TO THROW IT",200,250);

polygon_img = loadImage("polygon.png.png");
ground = new Ground(600,600,1400,20);
base1 = new Ground(410,395,220,10);
base2 = new Ground(700,320,260,10);

//3rd level
block2 = new Block(330,370,30,40);
block3 = new Block(360,370,30,40);
block4 = new Block(390,370,30,40);
block5 = new Block(420,370,30,40);
block6 = new Block(450,370,30,40);
block7 = new Block(480,370,30,40);


//2nd level
block8 = new Block(360,360,30,40);
block9 = new Block(390,360,30,40);
block10 = new Block(420,360,30,40);
block11 = new Block(450,360,30,40);

//top
block12 = new Block(390,350,30,40);
block13 = new Block(420,350,30,40);

//0
block14 = new Block(415,330,30,40);


//new base's level 3rd
block15 = new Block(630,300,30,40);
block16 = new Block(660,300,30,40);
block17 = new Block(690,300,30,40);
block18 = new Block(720,300,30,40);
block19 = new Block(750,300,30,40);
block20 = new Block(780,300,30,40);

//2nd level
block21 = new Block(690,290,30,40);
block22 = new Block(720,290,30,40);
block23 = new Block(750,290,30,40);

// top
block24 = new Block(720,270,30,45);

polygon = Bodies.circle(50,200,20);

World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x:50,y:100});


}

function draw(){
background(60,46,46);

Engine.update(engine);

ground.display();
base1.display();
base2.display();

block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();

block12.display();
block13.display();

block14.display();

block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

slingshot.display();
}

function mouseDragged(){
 Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly();

}