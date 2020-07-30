/* global createCanvas background image loadImage random, tint, frameRate, frameCount*/

let dvdImage, dvdImage2, imageX, xVelocity, imageY, yVelocity, RGB1, RGB2, RGB3, image1, image2, image2X, image2Y, x2Velocity, y2Velocity, RGB1_2, RGB2_2, RGB3_2, flag, t_initial, t;
const globalVelocity = 2; 
const canvasWidth = 400;
const canvasLength = 400;
const imageWidth = 100;  
const imageLength = 75; 
const fr = 50; 
const a = 2


function setup(){
  createCanvas(canvasWidth, canvasLength);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/2c8c05ca-f0b5-426e-9d1a-07a2d87bd9f6%2Fdvd-video.jpeg?v=1594094901767");
  dvdImage2 = loadImage("https://cdn.glitch.com/2c8c05ca-f0b5-426e-9d1a-07a2d87bd9f6%2Fdvd-video.jpeg?v=1594094901767");
  imageX = 0;
  imageY = 0;
  image2X = 50; 
  image2Y = 300
  xVelocity = globalVelocity;  
  yVelocity = globalVelocity; 
  x2Velocity = globalVelocity;
  y2Velocity = globalVelocity; 
  flag = true;  
  frameRate(fr); 
  t_initial = 0; 
  t = 0; 

}

function globalmove(x, y, xvel, yvel) {
  x += xvel; 
  y += yvel; 
  
  if (x  > canvasWidth - imageWidth || x < 0) {
    xvel = -xvel;
    RGB1 = random(0, 255);
    RGB2 = random(0, 255);
    RGB3 = random(0, 255);
    tint(RGB1, RGB2, RGB3);
  }
  
  if (y > canvasLength-imageLength || y < 0) {
    yvel = -yvel; 
    RGB1 = random(0, 255);
    RGB2 = random(0, 255);
    RGB3 = random(0, 255);
    tint(RGB1, RGB2, RGB3);
  }
}


function draw(){
  background(220);
  // Draw the logo at the new position.
  //image1 = image(dvdImage, imageX, imageY, imageWidth, imageLength);
  //globalmove(imageX, imageY, xVelocity, yVelocity);
  //move1();
  image2 = image(dvdImage2, image2X, image2Y, imageWidth, imageLength);
  move2(); 
  
}

function move1() {
  t_initial = frameCount
  t = frameCount/fr
  imageX += xVelocity; 
  imageY += yVelocity - 0.5*a*t^2; 
  
  if (imageX  > canvasWidth - imageWidth || imageX < 0) {
    xVelocity = -xVelocity;
    RGB1 = random(0, 255);
    RGB2 = random(0, 255);
    RGB3 = random(0, 255);
    tint(RGB1, RGB2, RGB3);
  }
  
  if (imageY > canvasLength-imageLength || imageY < 0) {
    yVelocity = -(yVelocity + a*t)
    RGB1 = random(0, 255);
    RGB2 = random(0, 255);
    RGB3 = random(0, 255);
    tint(RGB1, RGB2, RGB3);
  }
}

function move2() {
  image2X += x2Velocity; 
  image2Y += y2Velocity; 
  
  if (image2X  > canvasWidth - imageWidth || image2X < 0) {
    x2Velocity = -x2Velocity;
    RGB1 = random(0, 255);
    RGB2 = random(0, 255);
    RGB3 = random(0, 255);
    tint(RGB1, RGB2, RGB3);
  }
  
  if (image2Y > canvasLength-imageLength || image2Y < 0) {
    y2Velocity = -y2Velocity; 
    RGB1 = random(0, 255);
    RGB2 = random(0, 255);
    RGB3 = random(0, 255);
    tint(RGB1, RGB2, RGB3);
  }
}