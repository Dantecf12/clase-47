var nave
var fondo
var naveimg;
var wall1,wall2;
var laser;
var bot1;

function preload(){
fondo=loadImage("fondo.jpg");
naveimg=loadImage("navealiada1.png");
  
}

function setup() {
  createCanvas(windowWidth-300,windowHeight-20);
  nave=createSprite((windowWidth-300)/2,windowHeight-60);
  wall1=createSprite(5,windowHeight/2,2,windowHeight);
  wall2=createSprite(855,windowHeight/2,2,windowHeight);
  laser=createSprite((windowWidth-300)/2,400,20,20);
  bot1=createSprite(500,100,20,20);
  nave.addImage(naveimg);
  wall1.visible=true
  wall2.visible=true
  bot1.velocityX=6
}

function draw(){
  background(fondo);
  
 
  
  nave.bounce(wall1);
  nave.bounce(wall2);
  if (keyCode === RIGHT_ARROW) {
      nave.x=nave.x+2
    } 

  if (keyCode === LEFT_ARROW) { 
    nave.x=nave.x-2
     }
    if(keyCode===32){
     laser.x=nave.x
      laser.velocityY=-10
     }
     if(bot1.collide(wall2)){
     bot1.velocityX=-6
     }
     if(bot1.collide(wall1)){
       bot1.velocityX=6
     }
     //agregar sprites de naves enemigas y hacer que se muevan ,agregar grupos para no repetir

  
  drawSprites();
}