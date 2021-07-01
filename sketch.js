const Engine = Matter.Engine;
const World  = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;


var snowFlake =  [];
var snowFlakeA =  [];

var snowFlake1 = [];
var snowFlake1a =  [];

var snowFlake2 = [];

var snowFlake3 = [];
var snowFlake3a =  [];

var snowFlake4 = [];
var snowFlake4a = [];

var snowFlake5 = [];
var snowFlake5a = [];

var snowFlake6 = [];
var snowFlake7 = [];
var snowFlake8 = [];
var snowFlake9 = [];
var snowFlake10 = [];
var snowFlake11 = [];

var snowFlake12 = [];
var snowFlake12a = [];

var snowFlake13 = [];
var snowFlake13a = [];

var snowFlake14 = [];

var backgroundImg;
var groundImg;

var characterImg;
var character_walking;

function preload() {
backgroundImg = loadImage("boom.jpg");
groundImg = loadImage("snow.png");
characterImg = loadImage("idle_000.png");

}

function setup() {
createCanvas(1500,700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
}

function draw() {
  background(backgroundImg);
  drawSprites();

//snowflake 0-100/////////////////////////////////////////
  if(frameCount % 20 === 0){
    snowFlake.push(new SnowFlake(random(0,100), 30,30));
  }

  for(var k =0; k < snowFlake.length; k++) {
    snowFlake[k].display();
  }
  if(frameCount % 25 === 0){
    snowFlakeA.push(new SnowFlake(random(50,100), 18,18));
  }

  for(var k =0; k < snowFlakeA.length; k++) {
    snowFlakeA[k].display();
  }
//////////////////////////////////////////////////////////////

// snowflake1 101-200/////////////////////////////////////
  if(frameCount % 50 === 0){
    snowFlake1.push(new SnowFlake(random(101,200), 30,30));
  }

  for(var k =0; k < snowFlake1.length; k++) {
    snowFlake1[k].display();
  }
  if(frameCount % 45 === 0){
    snowFlake1a.push(new SnowFlake(random(150,200), 30,30));
  }

  for(var k =0; k < snowFlake1a.length; k++) {
    snowFlake1a[k].display();
  }
  ///////////////////////////////////////////////////////////////

////snowFlake2 201-300///////////////////////////////////////////
  if(frameCount % 60 === 0){
    snowFlake2.push(new SnowFlake(random(201,300), 30,30));
  }

  for(var k =0; k < snowFlake2.length; k++) {
    snowFlake2[k].display();
  }
  
/////////////////////////////////////////////////////////////////////

  // snowFlake3 301-400/////////////////////////////////////////////
  if(frameCount % 70 === 0){
    snowFlake3.push(new SnowFlake(random(301,400), 35,35));
  }

  for(var k =0; k < snowFlake3.length; k++) {
    snowFlake3[k].display();
  }
  if(frameCount % 35 === 0){
    snowFlake3a.push(new SnowFlake(random(350,400), 30,30));
  }

  for(var k =0; k < snowFlake3a.length; k++) {
    snowFlake3a[k].display();
  }
////////////////////////////////////////////////////////////////////
  // snowFlake4 401-500
  if(frameCount % 65 === 0){
    snowFlake4.push(new SnowFlake(random(401,500), 30,30));
  }

  for(var k =0; k < snowFlake4.length; k++) {
    snowFlake4[k].display();
  }
  if(frameCount % 23 === 0){
    snowFlake4a.push(new SnowFlake(random(450,500), 20,20));
  }

  for(var k =0; k < snowFlake4a.length; k++) {
    snowFlake4a[k].display();
  }
/////////////////////////////////////////////////////////////////////

///snowFlake5 501-600///////////////////////////////////////////////
  if(frameCount % 35 === 0){
    snowFlake5.push(new SnowFlake(random(501,600), 35,35));
  }

  for(var k =0; k < snowFlake5.length; k++) {
    snowFlake5[k].display();
  }
  if(frameCount % 15 === 0){
    snowFlake5a.push(new SnowFlake(random(550,600), 30,30));
  }

  for(var k =0; k < snowFlake5a.length; k++) {
    snowFlake5a[k].display();
  }
///////////////////////////////////////////////////////////////////

  // snowFlakes6 601-700/////////////////////////////////////////////////
  if(frameCount % 65 === 0){
    snowFlake6.push(new SnowFlake(random(601,700), 20,20));
  }

  for(var k =0; k < snowFlake6.length; k++) {
    snowFlake6[k].display();
  }
  //////////////////////////////////////////////////////////////////////

//snowFlake7 701-800///////////////////////////////////////////////////////
  if(frameCount % 55 === 0){
    snowFlake7.push(new SnowFlake(random(701,800), 30,30));
  }

  for(var k =0; k < snowFlake7.length; k++) {
    snowFlake7[k].display();
  }
////////////////////////////////////////////////////////////////////////////

//snowFlake8 801-900///////////////////////////////////////////////////////
  if(frameCount % 60 === 0){
    snowFlake8.push(new SnowFlake(random(801,900), 40,40));
  }

  for(var k =0; k < snowFlake8.length; k++) {
    snowFlake8[k].display();
  }
//////////////////////////////////////////////////////////////////////////

//snowFlake9 901-1000///////////////////////////////////////////////////////
  if(frameCount % 48 === 0){
    snowFlake9.push(new SnowFlake(random(901,1000), 25,25));
  }

  for(var k =0; k < snowFlake9.length; k++) {
    snowFlake9[k].display();
  }
///////////////////////////////////////////////////////////////////////////////

  //snowFlake10 1001-1100////////////////////////////////////////////////////
  if(frameCount % 30 === 0){
    snowFlake10.push(new SnowFlake(random(1001,1100), 30,30));
  }

  for(var k =0; k < snowFlake10.length; k++) {
    snowFlake10[k].display();
  }
////////////////////////////////////////////////////////////////////////////

  //snowFlake11 1100-1200///////////////////////////////////////////////////
  if(frameCount % 50 === 0){
    snowFlake11.push(new SnowFlake(random(1101,1200), 30,30));
  }

  for(var k =0; k < snowFlake11.length; k++) {
    snowFlake11[k].display();
  }
  ///////////////////////////////////////////////////////////////////////

  //snowFlake12 1201 - 1300////////////////////////////////////////
  if(frameCount % 60 === 0){
    snowFlake12.push(new SnowFlake(random(1201,1300), 30,30));
  }

  for(var k =0; k < snowFlake12.length; k++) {
    snowFlake12[k].display();
  }
  if(frameCount % 55 === 0){
    snowFlake12a.push(new SnowFlake(random(1250,1300), 30,30));
  }

  for(var k =0; k < snowFlake12a.length; k++) {
    snowFlake12a[k].display();
  }
////////////////////////////////////////////////////////////////////

  // snowFlake13 1301-1400///////////////////////////////////////////
  if(frameCount % 38 === 0){
    snowFlake13.push(new SnowFlake(random(1301,1400), 35,35));
  }

  for(var k =0; k < snowFlake13.length; k++) {
    snowFlake13[k].display();
  }
  if(frameCount % 20 === 0){
    snowFlake13a.push(new SnowFlake(random(0,100), 30,30));
  }

  for(var k =0; k < snowFlake13a.length; k++) {
    snowFlake13a[k].display();
  }
////////////////////////////////////////////////////////////////////////

//snowFlake 1401-1500//////////////////////////////////////////////////
  if(frameCount % 20 === 0){
    snowFlake14.push(new SnowFlake(random(1401,1500), 30,30));
  }

  for(var k =0; k < snowFlake14.length; k++) {
    snowFlake14[k].display();
  }
/////////////////////////////////////////////////////////////////////
image(characterImg,width/2-900,170,400,400);
image(groundImg,0,700,1500,-160);

}

function keyPressed() {
  if (keyCode === 39){
    character_walking = loadAnimation("walk_000.png","walk_001.png","walk_002.png","walk_003.png","walk_004.png","walk_005.png","walk_006.png","walk_007.png","walk_008.png","walk_009.png");
    character_walking.velocityX = 3;
  }
}
