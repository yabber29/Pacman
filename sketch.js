function Pacman() {
  this.x = scl * 1;
  this.y = scl * 1;
  this.d = scl * 0.5;
  this.adjustement = scl;
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
    ellipse(this.x + this.d, this.y + this.d, this.d, this.d);
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
    //var schild =0;
    this.x += this.xdir * scl;// - this.adjustement;
    this.y += this.ydir * scl;// - this.adjustement;
    var collision = false;
    if (this.ydir > 0) {
      pacY = scl + this.y + this.d;// * schild;
    } else {
      pacY = scl + this.y - this.d;// * schild;
    }
    if (this.xdir > 0) {
      pacX = scl + this.x + this.d;// * schild;
    } else {
      pacX = scl + this.x - this.d;// * schild;
    }
    
    //console.log(this.x + "," + this.y);
    for (let i = 0; i < t.length; i++) {
      var wall = t[i];
      if (
           (pacX > wall.x) &&
           (pacX < ((wall.x) + wall.w)) &&
           (pacY > wall.y) &&
           (pacY < ((wall.y) + wall.h))
        ) {
        console.log(scl + ":" + pacX + ";" + pacY + " --- " + wall.x + "," + wall.y + "/" + (wall.x + wall.w) + "," + (wall.y + wall.h));
        console.log("Collision with wall " + i);
        collision = true;
      }
    }
    if (collision) {
      this.x -= this.xdir * scl;// + this.adjustement;
      this.y -= this.ydir * scl;// + this.adjustement;
    }

  }
}
