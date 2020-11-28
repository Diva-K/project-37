var trex,trex_running;
var ground,groundImage,invisibleGround
var cloudImage
var
obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var score
var ObstaclesGroup
var CloudsGroup
function preload(){
//trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
trex_running=loadImage("mario.png")
groundImage=loadImage("ground2.png")  
cloudImage=loadImage("cloud.png")
obstacle=loadImage("plant.png")
obstacle2=loadImage("mushroom.png")

}
function setup() {
  createCanvas(600,400);
  trex=createSprite(50,360,10,10);
  trex.addImage("running",trex_running)
  trex.scale=0.5
  ground=createSprite(200,370,400,20)
  ground.addImage("ground",groundImage)
  invisibleGround=createSprite(200,380,400,5)
  invisibleGround.visible=false
  ObstaclesGroup=new Group()
  CloudsGroup=new Group()
  score=0
}



function draw() {
  background(180);
  drawSprites();
trex.collide(invisibleGround)
//console.log(trex.y)

if(keyDown("space")){
trex.velocityY=-12
   }
  trex.velocityY=trex.velocityY+0.5
  ground.velocityX=-6
  if(ground.x<0){
  ground.x=ground.width/2
     }
  if(frameCount%80===0){
     spawnClouds()
     }
  if(frameCount%100===0){
    spawnObstacles() 
}
 // console.log(frameRate)
score=score+Math.round(getFrameRate()/20)
text("score:"+score,500,20)
  
}

function spawnClouds(){
var cloud=createSprite(600,200,10,10)
cloud.addImage("cloudImage",cloudImage)
cloud.velocityX=-3
cloud.y=random(200,300)
cloud.lifetime=210  
cloud.scale=0.8
CloudsGroup.add(cloud)
}
function spawnObstacles(){
var obstacle=createSprite(600,370,10,10)
obstacle.velocityX=-6
var rand=Math.round(random(1,2))
switch(rand){
  case 1:obstacle.addImage(obstacle1)
    break;
    case 2:obstacle.addImage(obstacle2)
    break;
  
}
  obstacle.scale=0.2
  obstacle.lifetime=110
  ObstaclesGroup.add(obstacle)
}