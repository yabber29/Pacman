var scl;
var p;
var t = []

function setup() {
  createCanvas(windowHeight-20, windowHeight-20);
  scl = height/19;
  p = new Pacman();
  // 1. Reihe
  t[0] = new Terrain(0, 0, 19, 1);
  t[1] = new Terrain(0, 0, 1, 19);
  t[2] = new Terrain(18, 0, 1, 19);
  t[3] = new Terrain(0, 18, 19, 1);
  t[4] = new Terrain(2, 2, 2, 1);
  t[5] = new Terrain(5, 2, 3, 1);
  t[6] = new Terrain(9, 1, 1, 2);
  t[7] = new Terrain(11, 2, 3, 1);
  t[8] = new Terrain(15, 2, 2, 1);
  // 2. Reihe
  t[9] = new Terrain(2, 4, 1, 2);
  t[10] = new Terrain(15, 2, 1, 2);
  t[11] = new Terrain(15, 2, 2, 1);
  t[12] = new Terrain(15, 2, 2, 1);
  t[13] = new Terrain(15, 2, 2, 1);
   // Unterste Reihe
  t[14] = new Terrain(2, 16, 2, 1);
  t[15] = new Terrain(5, 16, 3, 1);
  t[16] = new Terrain(9, 16, 1, 2);
  t[17] = new Terrain(11, 16, 3, 1);
  t[18] = new Terrain(15, 16, 2, 1);
   // zweitunterste Reihe
  t[19] = new Terrain(2, 13, 2, 2);
  t[20] = new Terrain(5, 11, 1, 4);
  t[21] = new Terrain(7, 14, 5, 1);
  t[22] = new Terrain(15, 13, 2, 2);
  t[23] = new Terrain(13, 11, 1, 4);
   // Mittlere Reihe
  t[24] = new Terrain(2, 8, 4, 1);
  t[25] = new Terrain(2, 10, 4, 1);
  t[26] = new Terrain(13, 8, 4, 1);
  t[27] = new Terrain(13, 10, 4, 1);
  t[28] = new Terrain(15, 16, 2, 1);
   // Gespengster Box
  t[29] = new Terrain(7, 7, 1, 5);
  t[30] = new Terrain(11, 7, 1, 5);
  t[31] = new Terrain(8, 11, 1, 1);
  t[32] = new Terrain(10, 11, 1, 1);
  t[33] = new Terrain(8, 7, 1, 1);
  t[34] = new Terrain(10, 7, 1, 1);
}

function draw() {
  background(42);
  p.display();
  p.mouthmovement();
  p.move();
  
  for (var i = 0; i < t.length; i++){
    t[i].show();
  }
}

function Terrain(x,y,w,h){
  this.x = scl*x;
  this.y = scl*y;
  this.w = scl*w;
  this.h = scl*h;
  this.show = function (){
    fill(50, 50, 150);
    rect(this.x, this.y , this.w, this.h);
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
    p.ydir = -scl/20;
  }
  if (keyCode == DOWN_ARROW){
    p.down = true;
    p.xdir = 0;
    p.ydir = +scl/20;
  }
  if (keyCode == LEFT_ARROW){
    p.left = true;
    p.xdir = -scl/20;
    p.ydir = 0;
  }
  if (keyCode == RIGHT_ARROW){
    p.right = true;
    p.xdir = +scl/20;
    p.ydir = 0;
  }
}
