var bgimg,bg
var bggimg,bg
var Im,jpg
function preload(){

  bgimg=loadImage('images/bg.jpg')
  bggimg=loadImage('images/bgg.jpg')
  lmimg=loadImage('images/lm.jpg')

}
function setup() {
  createCanvas(1700,800);

 moutain=createSprite(850,100,1800,50)
 moutain.addImage("moutain",lmimg)
 moutain.scale=1.0
// Ground=createSprite(850,850,1700,20)
goat=createSprite(650,300,50,50)
 goat.addImage("goat",bggimg)
 goat.scale=0.2
 
ground=createSprite(850,750,1700,20);

}

function draw() {
  background(bgimg);  

if (keyDown ('space')){
goat.velocityY=(-10)

}
goat.velocityY=goat.velocityY+0.5

goat.collide(ground)
  drawSprites();

}
function spawnmoutains() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     moutain = createSprite(200,100,40,10);
    moutain.y = Math.round(random(10,60));
    //moutain.addImage(cloudImage);
    moutain.scale = 0.2;
    moutain.velocityX = -1;
    
     //assign lifetime to the variable
    moutain.lifetime = 134;
    
    //adjust the depth
    //cloud.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    //adding cloud to the group
 //moutainGroup.add(cloud);
    }
}


