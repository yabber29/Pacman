function Pacman() {
  this.x = scl * 10;
  this.y = scl * 12;
  this.d = scl * 0.5;
  this.xdir = 0;
  this.ydir = 0;
  this.mouthangle = 10;
  this.mouthchange = 3;
  this.up = false;
  this.down = false;
  this.left = false;
  this.right = true;

  this.display = function() {
    fill(200, 200, 0);
    strokeWeight(2);
    stroke(0);
    ellipse(this.x - this.d, this.y- this.d, this.d, this.d);
    noStroke();
    fill(42);
    if (p.right) {
      triangle(this.x, this.y,
        this.x + this.d / 2 + 1,
        this.y - this.d / 2 - this.mouthangle,
        this.x + this.d / 2 + 1,
        this.y + this.d / 2 + this.mouthangle);
    }
    if (p.left) {
      triangle(this.x, this.y,
        this.x - this.d / 2 - 1,
        this.y - this.d / 2 - this.mouthangle,
        this.x - this.d / 2 - 1,
        this.y + this.d / 2 + this.mouthangle);
    }
    if (p.up) {
      triangle(this.x, this.y,
        this.x - this.d / 2 - this.mouthangle,
        this.y - this.d / 2 - 1,
        this.x + this.d / 2 + this.mouthangle,
        this.y - this.d / 2 - 1);
    }
    if (p.down) {
      triangle(this.x, this.y,
        this.x - this.d / 2 - this.mouthangle,
        this.y + this.d / 2 + 1,
        this.x + this.d / 2 + this.mouthangle,
        this.y + this.d / 2 + 1);
    }

  }
  this.mouthmovement = function() {
    this.mouthangle += this.mouthchange;
    if (this.mouthangle > 40 || this.mouthangle < -this.d / 2) {
      this.mouthchange = -this.mouthchange;
    }
  }

  this.move = function() {
    var pacX, pacY;
    var schild = 0.51;
    this.x += this.xdir;
    this.y += this.ydir;
    var collision = false;
    if (this.ydir > 0) {
      pacY = this.y + this.d * schild;
    } else {
      pacY = this.y - this.d * schild;
    }
    if (this.xdir > 0) {
      pacX = this.x + this.d * schild;
    } else {
      pacX = this.x - this.d * schild;
    }
    
    //console.log(this.x + "," + this.y);
    for (let i = 0; i < t.length; i++) {
      var wall = t[i];
      //console.log(pacX + ";" + pacY + " --- " + wall.x + "," + wall.y + "/" + (wall.x + wall.w) + "," + (wall.y + wall.h));
      if (
           (pacX > wall.x) &&
           (pacX < ((wall.x-1) + wall.w)) &&
           (pacY > wall.y) &&
           (pacY < ((wall.y - 1) + wall.h))
        ) {
        //console.log("XXXXX + YYYYYY");
        collision = true;
      }
    }
    if (collision) {
      this.x -= this.xdir;
      this.y -= this.ydir;
    }

  }
}
