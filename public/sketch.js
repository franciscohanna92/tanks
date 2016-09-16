var tank;
var vel = 5;
var bullets = [];

function setup(){
	createCanvas(400,400);
	tank = new Tank(random(width), random(height), 24);
}

function draw(){
	background(51);
	tank.show();
	tankControls();
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show();
		bullets[i].update();
	}
}

function tankControls() {
	if(keyIsDown(UP_ARROW)){
		tank.move(0, -vel);
		tank.lookUp();
	} else if (keyIsDown(RIGHT_ARROW)) {
		tank.move(vel, 0);
		tank.lookRight();
	} else if (keyIsDown(DOWN_ARROW)) {
		tank.move(0, vel);
		tank.lookDown();
	} else if (keyIsDown(LEFT_ARROW)) {
		tank.move(-vel, 0);
		tank.lookLeft();
	}
}

function keyPressed(){
	if(key === ' '){
		bullet = new Bullet(tank.center.x, tank.center.y, tank.facing);
		bullets.push(bullet);
	}
}