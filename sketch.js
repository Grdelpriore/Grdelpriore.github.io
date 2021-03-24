let img;
let x,y;

function preload(){
  img = loadImage("hallway.jpg");
}

function setup() {
  createCanvas(400, 400);
  strokeWeight(2); 
  fill(10,16,11,240);
   stroke(10,16,11,240);
}

function draw() {
   image(img, -50,0,img.width, img.height)
//boy 1
  push();
  translate(300-x,150-y);
 //head
    beginShape(); 
    vertex(0,0);
    quadraticVertex(10,80,50,40);
    quadraticVertex(59,2,24,-4);
    quadraticVertex(8,-8,0,0);
    endShape(); 
  //body
  beginShape(); 
    vertex(25,50);
    quadraticVertex(-20,160,-5,130);
    quadraticVertex(25,25,55,127);
    quadraticVertex(30,50,40,50);
    endShape(); 
  //eyes
  strokeWeight(10); 
  stroke(140,0,0,200);
  point(0,25)
  point(25,25)
  
  pop();
  
  //boy 2
  push();
  translate(201-y,244+x);
 //head
    beginShape(); 
    vertex(0,0);
    quadraticVertex(10,80,50,40);
    quadraticVertex(59,2,24,-4);
    quadraticVertex(8,-8,0,0);
    endShape(); 
  //body
  beginShape(); 
    vertex(25,50);
    quadraticVertex(-20,160,-5,130);
    quadraticVertex(25,25,55,127);
    quadraticVertex(30,50,40,50);
    endShape(); 
  //eyes
  strokeWeight(10); 
  stroke(140,0,0,200);
  point(10,25)
  point(35,25)
  
  pop();
  
  //boy 3
  push();
  translate(238+x,127+y);
 //head
    beginShape(); 
    vertex(0,0);
    quadraticVertex(10,80,50,40);
    quadraticVertex(59,2,24,-4);
    quadraticVertex(8,-8,0,0);
    endShape(); 
  //body
  beginShape(); 
    vertex(25,50);
    quadraticVertex(-20,160,-5,130);
    quadraticVertex(25,25,55,127);
    quadraticVertex(30,50,40,50);
    endShape(); 
  //eyes
  strokeWeight(10); 
  stroke(140,0,0,200);
  point(45,25)
  point(25,25)
  
  pop();
    console.log(mouseX + ", " + mouseY);
  
  //vibin
if (mouseIsPressed) {
    x=random(-6,7);
    y=random(-8,6);
    
  } else {
    x=0;
    y=0;
   
  }  

  
  
}
