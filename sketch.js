var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg= loadImage("garden.png");
    catImg1=loadImage("cat1.png");
    mouseImg=loadImage("mouse1.png");
    catImg2=loadImage("cat2.png/cat3.png");
    mouseImg2=loadImage("mouse2.png/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  var cat=createSprite(200,200,10,5);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  }
  if(keyCode===LEFT_ARROW){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.frameDelay=25;
  }

}
