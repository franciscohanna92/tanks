function Tank(x, y, s){
	this.c = createVector(x,y);
	this.s = s;
	this.d = createVector(x + s, y);

	this.show = function(){
		rectMode(RADIUS);
		fill(73, 160, 32);
		rect(this.c.x, this.c.y, this.s, this.s);

		stroke(73, 100, 32);
		strokeWeight(3);
		line(this.c.x, this.c.y, this.d.x, this.d.y);

		fill(73, 80, 32);
		ellipse(this.c.x, this.c.y, this.s, this.s);
	}

	this.move = function(x,y){
		this.c.x += x;
		this.c.y += y;
	}

	this.lookUp = function(){
		this.d.x = this.c.x;
		this.d.y = this.c.y - this.s;
	}
	this.lookRight = function(){
		this.d.x = this.c.x + this.s;
		this.d.y = this.c.y;
	}
	this.lookDown = function(){
		this.d.x = this.c.x;
		this.d.y = this.c.y + this.s;
	}
	this.lookLeft = function(){
		this.d.x = this.c.x - this.s;
		this.d.y = this.c.y;
	}
}