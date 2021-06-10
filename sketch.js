var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.mouseX=3;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //function to spawn the apples
function spawnapples(){
  // write your code here
  if(frameCount% 20 === 0) {
  apples=createSprite(600,100,40,10)
  apples.velocityX= -3
  apples.addImage(applesImage)
  apples.y= Math.round(random(10,60))
  apples.scale=0.4;

  //function to spawn the leaves
function spawnleaves(){
  // write your code here
  if(frameCount% 80 === 0) {
  leaves=createSprite(600,100,40,10)
  leaves.velocityX= -3
  leaves.addImage(leavesImage)
  leaves.y= Math.round(random(10,60))
   leaves.scale=0.4;

  drawSprites();
}
}