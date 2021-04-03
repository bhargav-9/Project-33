

var backgroundimg;
var SnowIMg1;
var SnowIMg2;

function preload(){
  SnowIMg1=loadImage("snow4.webp")
  SnowIMg2=loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 backgroundimg=loadImage("snow3.jpg")

 
}

function draw() {
  background(backgroundimg);  
  if(frameCount%60===0){
    snowfall();

  }

  drawSprites();
} 


function  snowfall(){
   var Snow=createSprite(random(20,780));
   var a=random(1,10);
  console.log(a)
   if(a>=5)
   Snow.addImage(SnowIMg1)
  else
  Snow.addImage(SnowIMg2)
  Snow.scale=0.2;
  Snow.velocityX=0;
  Snow.velocityY=5;
  Snow.lifetime=500;
}