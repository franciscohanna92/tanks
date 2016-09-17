function Bullet(x, y, d){
	this.pos = createVector(x, y);
	this.radius = 4;
	this.vel = 20;
	this.dir = d;

	this.show = function(){
		strokeWeight(1);
		fill(200, 200, 0);
		if (this.dir == 'up') {
			ellipse(this.pos.x, this.pos.y - 30, this.radius, this.radius + 8);
			this.pos.y -= this.vel;
		} else if (this.dir == 'right') {
			ellipse(this.pos.x + 30, this.pos.y, this.radius + 8, this.radius);
			this.pos.x += this.vel;
		} else if (this.dir == 'down'){
			ellipse(this.pos.x, this.pos.y + 30, this.radius, this.radius + 8);
			this.pos.y += this.vel;
		} else if (this.dir == 'left') {
			ellipse(this.pos.x - 30, this.pos.y, this.radius + 8, this.radius);
			this.pos.x -= this.vel;
		}
	}
}