  let x,y,mr,mg,mb;
let pageNum = 1;
let numPages = 7;

let mallowX = 120;
let mallowY = 100;

let tempX=120;
let tempY=100;

var hit = false;

function setup() {
 
  createCanvas(400, 400);
  background(194, 223, 255);
  //fill(31, 27, 24);
  

   

x=250;
y=140;
  mr=245;
mg=245;
mb=245;

}

function draw() {
  
  //console.log(mouseX + ", " + mouseY);
  //print('colliding?', hit,mg,mb);
  strokeWeight(4);

  
 if (pageNum == 1){
//reset/sets mallow
mr=245;
mg=245;
mb=245;
//resets/sets positioning
x=250;

   
   background(194, 223, 255);
   
   //dialogue
push();
  textSize(18);
  fill(0);
  text("Hmm, I could really go for", x-70, y-66);
  text("a roasted marshmallow.",x-60,y-40)
pop();

   //house
   push();
   fill(36, 94, 28);
   rect(-10,290,500,300)
   fill(143, 37, 37);
   rect(-10,100,100,200);
   fill(31, 25, 25);
   triangle(-50,100,120,100,0,16);
   pop();
    //me
  fill(255,255,255);
  ellipse(x,y,50);
  //body
  line(x, y+25, x, y+100);
  //legs
  line(x, y+100, x+15, y+150);
  line(x, y+100, x-15, y+150);
  //arms
  line(x, y+30, x+35, y+45);
  line(x, y+30, x-15, y+65);
   
  }
  else if (pageNum == 2){
     background(194, 223, 255);
  //dialogue  
push();
  textSize(18);
  fill(0);
  text("That volcano looks like a good spot.", x-70, y-56);

pop();
    
  push();
    fill(36, 94, 28);
    rect(-10,290,500,300)
  pop();

x=150;
     //me
  fill(255,255,255);
  ellipse(x,y,50);
  //body
  line(x, y+25, x, y+100);
  //legs
  line(x, y+100, x+15, y+150);
  line(x, y+100, x-15, y+150);
  //arms
  line(x, y+30, x+35, y+45);
  line(x, y+30, x-15, y+65);

//volcano
push();
 translate(302,214);
 fill(31, 27, 24);
 beginShape();
 vertex(45, 20);
 vertex(70, 20);
 vertex(105, 75);
 vertex(10, 75);
 endShape(CLOSE);
pop();
  }
  
  else if (pageNum == 3){
     background(194, 223, 255);
    fill(36, 94, 28);
rect(-10,290,500,300)


x=150;
     //me
  fill(255,255,255);
  ellipse(x,y,50);
  //body
  line(x, y+25, x, y+100);
  //legs
  line(x, y+100, x+15, y+150);
  line(x, y+100, x-15, y+150);
  //arms
  line(x, y+30, x+35, y+45);
  line(x, y+30, x-15, y+65);

//volcano
push();
 translate(302,214);
 fill(31, 27, 24);
 beginShape();
 vertex(10, -10);
 vertex(105, -10);
 vertex(155, 75);
 vertex(-40, 75);
 endShape(CLOSE);
pop();

push();   
    strokeWeight(2);
    noFill();
    stroke(206, 4, 4);
    curve(325, 225, 350, 210, 300, 281, 315, 165);
    curve(385, 225, 355, 210, 340, 291, 385, 175);

pop();
  
  }
  
   
  else if (pageNum == 4){

       background(194, 223, 255);
    
    
push();
  textSize(18);
  fill(0);
  text("Lava is the perfect replacement for a campfire.", x-80, y-56);
pop();
    
    push();  
     fill(54, 42, 42);
       rect(-10,290,500,300)
    pop();
    x=100;


//volcano
push();
fill(31, 27, 24);
triangle(167,290,550,160,408,290);
pop();

push();   
    strokeWeight(20);
    noFill();
    stroke(206, 4, 4);
    curve(325, 225, 400, 210, 300, 281, 315, 165);
    curve(385, 225, 405, 210, 340, 291, 385, 175);
pop();

       //me
  fill(255,255,255);
  ellipse(x,y,50);
  //body
  line(x, y+25, x, y+100);
  //legs
  line(x, y+100, x+15, y+150);
  line(x, y+100, x-15, y+150);
  //arms
  line(x, y+30, x+35, y+45);
  line(x, y+30, x-15, y+65);
  
  }
  else if (pageNum == 5){
//lava game
    background(43, 38, 34);
    
    push();
    fill(206, 4, 4);
    stroke(206, 4, 4);
    rect(256,0,200,500);
    pop();
    
push();
  textSize(18);
  fill(240);
  text("Roast the marshmallow ", 10,50);
  text("to perfection", 10,68);
pop();
    
    mallowX = tempX + map(mouseX, 25, 350, -62, 130,1); 
    mallowY = tempY + map(mouseY, 10, 250, 0, 200,1); 
    
    push();

    strokeWeight(10);
    stroke(102, 58, 10);
    line(mallowX-300,mallowY,mallowX,mallowY);
    noStroke();
    
    
    rect(mallowX-30, mallowY-20, 55, 40, 5);
    pop();
    
  hit = collideRectRect(256,0,200,500, mallowX-30, mallowY-20, 55, 40, 5);
    
    if(hit){ //change color!
		fill(mr,mg,mb);
      mg--;
      mb=mb-1.5;
	}
    else if(mb<0){
		
      mg=0;
      mb=0;
      mr=0;
      fill(mr,mg,mb);
	}
  else{
    fill(mr,mg,mb);
  }
     
   
  }
  else if (pageNum == 6){
     background(194, 223, 255);
    x=80;
   fill(255,255,255);
  ellipse(x,y,50);
  //body
  line(x, y+25, x, y+100);
  //legs
  line(x, y+100, x+15, y+150);
  line(x, y+100, x-15, y+150);
  //arms
  line(x, y+30, x+35, y+45);
  line(x, y+30, x-15, y+65);
  
  //mallow
    push();
    //stick
    strokeWeight(3);
    stroke(102, 58, 10);
    line(x+30,y+50,x+60,y+20);
    
   //mallow
    fill(mr,mg,mb);
    noStroke();
    angleMode(DEGREES);
    rotate(-42);
    rect(x-88,y+68,12,8,2);
    pop();
    
//volcano\
push();
 fill(31, 27, 24);
 triangle(167,290,550,160,408,290);
pop();

push();   
    fill(54, 42, 42);
    rect(-10,290,500,300)
    strokeWeight(20);
    noFill();
    stroke(206, 4, 4);
    curve(325, 225, 400, 210, 300, 281, 315, 165);
    curve(385, 225, 405, 210, 340, 291, 385, 175);
pop();
    
    
  //dialogue
  push();
  textSize(18);
  fill(0);
  
  if(mb==0){
    text("I can't eat this!", x+50, y-10);
  }  
    
  else if(mb==245){
    text("Did you even cook this?", x+50,y-10);
  }

  else{
    text("Perfectly cooked!", x+50, y-10);
  }    

  pop();
  }
  
  
  
 else if (pageNum == 7){  
    background(44, 57, 82);
    textSize(50);
  text("THE END", 90, 200);
 }
  
  
}


function mousePressed(){
  
  if (pageNum < numPages){
    pageNum++;
  }
  
  else{
    pageNum = 1;
  }  
  
  
  
}

