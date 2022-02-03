const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var parede1, parede2, parede3, parede4;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  parede1 = new Parede(200, 390, 400, 20);
  parede2 = new Parede(390, 200, 20, 400);
  parede3 = new Parede(10, 200, 20, 400);
  parede4 = new Parede(200, 10, 400, 20);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  parede1.mostrar();
  parede2.mostrar();
  parede3.mostrar();
  parede4.mostrar();
}

