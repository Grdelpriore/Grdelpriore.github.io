let serial

let latestData = [250,50];
var player, drops,drop,p1,player_scale,newDrop,p_hitbox, d_hitbox

player_scale=0.1;
d_hitbox = 0.1;
p_hitbox=1;

function setup() {
  createCanvas(500, 700);
  
  //serial
serial = new p5.SerialPort();

 serial.list();
 serial.open('COM3');
 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);

  
  
  
 //player sprite control 
 player = loadImage('raindrop_1.png');
  p1 = createSprite(200,height/2);
  p1.scale=(player_scale);
  p1.addImage(player);
  p1.setCollider("circle", -p_hitbox*8,-8, 150^p_hitbox);
 
  
//drops sprite control
   drop = loadImage('drops.png');
drops=new Group();
  
  for(var j = 0; j<20; j++) {
   newDrop = createSprite(random(0, width), random(height,height/2));
    d_hitbox=random(0.050,0.1);
    newDrop.addImage(drop);
  newDrop.scale = d_hitbox;
    drops.add(newDrop);
   newDrop.setCollider('circle', 2, 1, 200);
    //newDrop.debug = true;  
   newDrop.setSpeed(random(0.5,3), 270);
  
  }
}
  
  


function draw() {
  background(225, 234, 247);
  
 

  
  fill(0);

p1.position.x = map(latestData[0],0,1023,0,width);
p1.position.y = map(latestData[1],0,1023,0,height);

p1.overlap(drops,collect);
  
  // p1.scale=(player_scale);
  // p1.debug = true;
  drops.add(newDrop);
  newDrop.setSpeed(random(0.5,3), 270);
  
  drawSprites();
}


function collect(drops, collected)

{
  p_hitbox=p_hitbox+10;
  player_scale=player_scale+0.01;
  p1.scale=(player_scale);

    collected.remove();
  
 drawSprites();
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 latestData = split(currentString, ",");
 console.log(currentString);
 
}

//function draw() {
// background(255,255,255);
 //fill(0,0,0);
 //text(latestData, 10, 10);
 // Polling method
 /*
 if (serial.available() > 0) {
  let data = serial.read();
  ellipse(50,50,data,data);
 }
 */
//}