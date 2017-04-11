function Bullet(x, y, d){
	this.posInicial = createVector(x, y);
	this.pos = createVector(x, y);
	// this.radius = 4;
	this.ini = createVector(x, y);
	this.fin = createVector(x, y);
	this.largoLine = 8;
	this.vel = 10;
	this.dir = d;

	this.show = function(){
		stroke(255);
		strokeWeight(3);
		if (this.dir == 'up') {
			this.setIniFin(this.pos.x, this.pos. y + this.largoLine - 30, this.pos.x, this.pos.y - 30);
			this.pos.y -= this.vel;
		} else if (this.dir == 'right') {
			this.setIniFin(this.pos.x  + this.largoLine + 30, this.pos.y, this.pos.x + 30, this.pos.y);
			this.pos.x += this.vel;
		} else if (this.dir == 'down'){
			this.setIniFin(this.pos.x, this.pos.y  + this.largoLine + 30, this.pos.x, this.pos.y + 30);
			this.pos.y += this.vel;
		} else if (this.dir == 'left') {
			this.setIniFin(this.pos.x  + this.largoLine - 30, this.pos.y, this.pos.x - 30, this.pos.y);
			this.pos.x -= this.vel;
		}
		line(this.ini.x, this.ini.y , this.fin.x, this.fin.y);
	}

	this.setIniFin = function(ix, iy, fx, fi) {
		this.ini.x = ix;
		this.ini.y = iy
		this.fin.x = fx;
		this.fin.y = fi;
	}

	this.mustDestroy = function() {
		let distancia = p5.Vector.sub(this.posInicial, this.pos);
		if(abs(distancia.x) > 500 ||  abs(distancia.y) > 500) {
			console.log('Debe destruirse');
			return true;
		}
	} 
}