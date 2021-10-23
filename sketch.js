const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  var playerBase_options = {
    isStatic : true,
  }
  playerBase = Bodies.rectangle(200, 450, 180, 150, playerBase_options);
  World.add(world, playerBase);

  //create player body
  playerBody = Bodies.rectangle(250, 300, 50, 70, playerBase_options);
  World.add(world, playerBody);



}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image (playerimage, playerBody.position.x, playerBody.position.y, 50, 180);

  //show the playerbase image using image() function
  image (baseimage, playerBase.position.x, playerBase.position.y, 180, 150);


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
