var maincar
var ob1 
var _imgob2
var _imgob3
var maincar_img
var ob1_img
var ob2_img
var ob3_img
var track
var track_img
var gameState
var play
var end
var score
function preload() {
 maincar_img=loadImage("images/car1.png")
 ob1_img=loadImage("images/car-145008_1280.png")
 ob2_img=loadImage("images/download.jpg")
 ob3_img=loadImage("images/images (1).png") 
 track_img=loadImage("images/track.jpg")
}
function setup() {
  createCanvas(1500,1000);
  maincar=createSprite(750,800, 50, 50);
 maincar.addImage(maincar_img);
 maincar.scale=0.2
 ob1=createSprite(1200,500,50,50)
 ob1.addImage(ob1_img);
 ob1.scale=0.2
 ob2=createSprite(1000,650,50,50);
 ob2.addImage(ob2_img);
 ob2.scale=0.2
 ob3=createSprite(800,400,50,50)
 ob3.addImage(ob3_img);
 ob3.scale=0.2
 track=createSprite(900,500,1000,1000);
track.addImage(track_img)
track.scale=3

//track.velocityY=3
}

function draw() {
  background("white");  
if(keyDown(UP_ARROW)){
maincar.velocityY=-3;
}
if(track.y>height){
track.y=track.width/2-200

}


if(keyDown(LEFT_ARROW)){
maincar
}
  drawSprites();
}