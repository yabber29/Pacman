
var scl;
var p;
//var g;
var t = []
var size = 20;
var factor = 1;
var speed = 1;

var devmode = false;

function setup() {
  //createCanvas(windowHeight-size, windowHeight-size);
  createCanvas(windowHeight, windowHeight);
  scl = windowHeight/size;///19;
  frameRate(30);
  rectMode(CENTER);
  p = new Pacman();

  t[t.length] = new Terrain(0, 0, 1, size);        // Top Wall
  t[t.length] = new Terrain(0, 0, size, 1);        // Left Wall
  t[t.length] = new Terrain(size - 1, 0, 1, size); // Right Wall 
  t[t.length] = new Terrain(0, size - 1, size, 1); // Bottom Wall

 /* 
  t[t.length] = new Terrain(int(random(2, 6)), int(random(2, 6)), 1, random(2, 6)); 
  t[t.length] = new Terrain(int(random(6, 12)), int(random(6, 12)), 1, random(6, 12));
  t[t.length] = new Terrain(int(random(2, 18)), int(random(2, 18)), 1, random(2, 18));
  t[t.length] = new Terrain(int(random(2, 24)), int(random(2, 24)), 1, random(2, 24));
  t[t.length] = new Terrain(int(random(2, 30)), int(random(2, 30)), 1, random(2, 30));
  t[t.length] = new Terrain(int(random(2, 36)), int(random(2, 36)), 1, random(2, 36));
  t[t.length] = new Terrain(int(random(2, 42)), int(random(2, 42)), 1, random(2, 42));
  t[t.length] = new Terrain(int(random(2, 48)), int(random(2, 48)), 1, random(2, 48));
  t[t.length] = new Terrain(int(random(2, 54)), int(random(2, 54)), 1, random(2, 54));
  t[t.length] = new Terrain(int(random(2, 60)), int(random(2, 60)), 1, random(2, 60));
 */ 
    
  
 /* // 1. Reihe
  t[0] = new Terrain(0, 0, 40, 1);
  t[1] = new Terrain(0, 0, 1, 40);
  t[2] = new Terrain(20, 0, 1, 40);
  t[3] = new Terrain(0, 20, 40, 1);
  */
  t[t.length] = new Terrain(2, 2, 2, 1);
  t[t.length] = new Terrain(5, 2, 3, 1);
  t[t.length] = new Terrain(9, 1, 2, 2);
  t[t.length] = new Terrain(12, 2, 3, 1);
  t[t.length] = new Terrain(16, 2, 2, 1);
  // 2. Reihe
  t[t.length] = new Terrain(2, 4, 2, 2);
  t[t.length] = new Terrain(16, 4, 2, 2);
  t[t.length] = new Terrain(8, 4, 4, 1);
  t[t.length] = new Terrain(5, 4, 2, 4);
  t[t.length] = new Terrain(13, 4, 2, 4);
  // Unterste Reihe
  t[t.length] = new Terrain(2, 17, 2, 1);
  t[t.length] = new Terrain(5, 17, 3, 1);
  t[t.length] = new Terrain(9, 17, 2, 2);
  t[t.length] = new Terrain(12, 17, 3, 1);
  t[t.length] = new Terrain(16, 17, 2, 1);
  // zweitunterste Reihe
  t[t.length] = new Terrain(2, 14, 2, 2);
  t[t.length] = new Terrain(5, 12, 2, 4);
  t[t.length] = new Terrain(8, 15, 4, 1);
  t[t.length] = new Terrain(16, 14, 2, 2);
  t[t.length] = new Terrain(13, 12, 2, 4);
  // Mittlere Reihe
  t[t.length] = new Terrain(3, 8, 4, 1);
  t[t.length] = new Terrain(3, 12, 4, 1);
  t[t.length] = new Terrain(13, 8, 4, 1);
  t[t.length] = new Terrain(13, 12, 4, 1);
  t[t.length] = new Terrain(14, 10, 5, 1);
  t[t.length] = new Terrain(1, 10, 5, 1);
  //t[t.length] = new Terrain(17, 10, 5, 1);
  //t[t.length] = new Terrain(7, 10, 1, 1);
  //t[t.length] = new Terrain(13, 10, 1, 1);
   //Gespengster Box
  t[t.length] = new Terrain(11, 6, 1, 8);
  t[t.length] = new Terrain(9, 9, 2, 1);
  t[t.length] = new Terrain(8, 6, 1, 8);
  t[t.length] = new Terrain(9, 10, 2, 1);  
  t[t.length] = new Terrain(10, 6, 1, 1);
  t[t.length] = new Terrain(9, 13, 1, 1);
}

function draw() {
  var i, j;
  background(42);
  p.display();
  p.mouthmovement();
  p.move();   
  //g.display();
  //g.mouthmovement();
  //g.move();   
  
  
  
  for (i = 0; i < t.length; i++){
    t[i].show();
  }
  if (devmode) {  
    stroke(255);
    noFill();
    for(i = 0; i < size; i++) {
      for(j = 0; j < size; j++) {
        rect(i*scl + scl * 0.5, j*scl+ scl * 0.5, scl, scl);
      }
    }
  }
}

function Terrain(x,y,w,h){
  this.x = scl*x*factor;
  this.y = scl*y*factor;
  this.w = scl*w*factor;
  this.h = scl*h*factor;
  this.show = function (){
    fill(50, 50, 150);
    rect(this.x + this.w * 0.5, this.y + this.h * 0.5 , this.w, this.h);
  }
}

function keyPressed () {
  p.up = false;
  p.down = false;
  p.left = false;
  p.right = false;
  
  if (keyCode == UP_ARROW){
    p.up = true;
    p.xdir = 0;
    p.ydir -= 1;
  }
  if (keyCode == DOWN_ARROW){
    p.down = true;
    p.xdir = 0;
    p.ydir += 1;
  }
  if (keyCode == LEFT_ARROW){
    p.left = true;
    p.xdir -= 1;
    p.ydir = 0;
  }
  if (keyCode == RIGHT_ARROW){
    p.right = true;
    p.xdir += 1;
    p.ydir = 0;
  }
}
/*
function keyPressed () {
  g.w = false;
  g.s = false;
  g.a = false;
  g.d = false;
  
  if (keyCode == W){
    g.up = true;
    g.xdir = 0;
    g.ydir = -scl;
  }
  if (keyCode == S){
    g.down = true;
    g.xdir = 0;
    g.ydir = +scl;
  }
  if (keyCode == A){
    g.left = true;
    g.xdir = -scl;
    g.ydir = 0;
  }
  if (keyCode == D){
    g.right = true;
    g.xdir = +scl;
    g.ydir = 0;
  }
}*/
