function Tank(x, y, r, f, c){
	this.center 	= createVector(x,y);
	this.radius 	= r;
	this.dir 		= createVector(x + r, y);
	this.facing 	= f;
	this.color 		= c;

	this.show = function(){
		if(this.facing == 'up'){
			this.dir.x = this.center.x;
			this.dir.y = this.center.y - this.radius;
		} else if(this.facing == 'right'){
			this.dir.x = this.center.x + this.radius;
			this.dir.y = this.center.y;
		} else if(this.facing == 'down'){
			this.dir.x = this.center.x;
			this.dir.y = this.center.y + this.radius;
		} else if(this.facing == 'left'){
			this.dir.x = this.center.x - this.radius;
			this.dir.y = this.center.y;
		}

		// Cuerpo del tanque
		strokeWeight(1);
		stroke(73, 100, 32);
		rectMode(RADIUS);
		fill(this.color.r, this.color.g, this.color.b);
		rect(this.center.x, this.center.y, this.radius, this.radius);

		// Cañon
		fill(73, 80, 32);
		ellipse(this.center.x, this.center.y, this.radius, this.radius);

		// Torreta
		stroke(73, 100, 32);
		strokeWeight(3);
		line(this.center.x, this.center.y, this.dir.x, this.dir.y);
	}

	this.update = function(x, y){
		// Movimiento
		this.center.x += x;
		this.center.y += y;
	}
}