function Pacman(){
    this.x = width/2;
    this.y = height/2;
    this.d = scl*0.75;
    this.xdir = scl/20;
    this.ydir = 0;
    this.mouthangle = 10;
    this.mouthchange = 3;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = true;
    
  
    this.display = function() {
      fill(200, 200, 0);
      noStroke();
      ellipse(this.x, this.y, this.d, this.d);
      fill(42);
      if (p.right) {
        triangle(this.x, this.y,
               this.x + this.d/2+1,
               this.y - this.d/2 - this.mouthangle,
               this.x + this.d/2+1,
               this.y + this.d/2 + this.mouthangle);
      }
      if (p.left) {
        triangle(this.x, this.y,
               this.x - this.d/2-1,
               this.y - this.d/2 - this.mouthangle,
               this.x - this.d/2-1 ,
               this.y + this.d/2 + this.mouthangle);
      }
      if (p.up) {
        triangle(this.x, this.y,
               this.x - this.d/2 -this.mouthangle,
               this.y - this.d/2 - 1,
               this.x + this.d/2 +this.mouthangle,
               this.y - this.d/2 - 1);
      }
      if (p.down) {
        triangle(this.x, this.y,
               this.x - this.d/2 -this.mouthangle,
               this.y + this.d/2 + 1,
               this.x + this.d/2 +this.mouthangle,
               this.y + this.d/2 + 1);
      }
    }
    this.mouthmovement = function(){
      this.mouthangle += this.mouthchange;
      if (this.mouthangle > 40 || this.mouthangle < -this.d/2) {
        this.mouthchange = -this.mouthchange;
      }
    }
    
    this.move = function (){
      this.x += this.xdir;
      this.y += this.ydir;
    }
  }