function Bullet(x, y, d){
	this.pos = createVector(x, y);
	this.r = 12;
	this.v = 10;
	this.dir = d;

	this.show = function(){
		strokeWeight(1);
		fill(255, 0, 0);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}

	this.update = function(){
		if (this.dir == 'up') {
			this.pos.y -= this.v;
		} else if (this.dir == 'right') {
			this.pos.x += this.v;
		} else if (this.dir == 'down'){
			this.pos.y += this.v;
		} else if (this.dir == 'left') {
			this.pos.x -= this.v;
		}
	}
}