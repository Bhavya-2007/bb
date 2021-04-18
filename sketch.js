var cat,catImg,caas,dd
var rat,ratImg
var garden,gardenImg
//var Gamestate=1
//var Play=1
//var End=0;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    ratImg=loadAnimation("images/mouse1.png");
    catImg=loadImage("images/cat1.png");
    caas=loadAnimation("images/cat2.png","images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(300,300);
    garden.addImage(gardenImg);
    garden.scale=1
    
    rat=createSprite(150,550);
    rat.addAnimation("ff",ratImg);
    rat.scale=0.1

    cat=createSprite(600,550);
    cat.addImage("ff",catImg);
    cat.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT")){
    cat.velocityX=-2;
    cat.velocityY=0;
       // cat.addAnimation("ss",mouse2.png,mouse3.png);
    //cat.changeAnimation("ss");
  }
  if(keyDown("right")){
    cat.velocityX=2;
    cat.velocityY=0;
  }    
}
