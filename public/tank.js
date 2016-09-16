function Tank(x, y, s){
	this.center = createVector(x,y);
	this.size = s;
	this.dir = createVector(x + s, y);
	this.facing = 'right';

	this.show = function(){
		strokeWeight(1);
		rectMode(RADIUS);
		fill(73, 160, 32);
		rect(this.center.x, this.center.y, this.size, this.size);

		stroke(73, 100, 32);
		strokeWeight(3);
		line(this.center.x, this.center.y, this.dir.x, this.dir.y);

		fill(73, 80, 32);
		ellipse(this.center.x, this.center.y, this.size, this.size);
	}

	this.move = function(x,y){
		this.center.x += x;
		this.center.y += y;
	}

	this.lookUp = function(){
		this.dir.x = this.center.x;
		this.dir.y = this.center.y - this.size;
		this.facing = 'up';
	}

	this.lookRight = function(){
		this.dir.x = this.center.x + this.size;
		this.dir.y = this.center.y;
		this.facing = 'right';
	}

	this.lookDown = function(){
		this.dir.x = this.center.x;
		this.dir.y = this.center.y + this.size;
		this.facing = 'down';
	}

	this.lookLeft = function(){
		this.dir.x = this.center.x - this.size;
		this.dir.y = this.center.y;
		this.facing = 'left';
	}
}