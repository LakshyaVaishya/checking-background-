var road,roadImg ;
var canvas ;
var zombie,zombieImg ;
function preload() {
 roadImg = loadImage("assets/road1.jpg")
 zombieImg = loadAnimation("assets/Zombie.gif")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  zombie = createSprite(width/2,height)
 zombie.addAnimation("zombie",zombieImg)
zombie.scale = 0.4
}

function draw() {
  background(roadImg);
  image(roadImg,0,-height*6,width,height*6);
  camera.position.x = zombie.position.x;
  camera.position.y = zombie.position.y;

  if (keyDown(UP_ARROW)){
    zombie.velocityY-=2
  }
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
