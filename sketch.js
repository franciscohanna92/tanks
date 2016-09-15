var tank;
var vel = 4;

function setup(){
	createCanvas(400,400);
	tank = new Tank(random(width), random(height), 24);
}

function draw(){
	background(153, 76, 0);
	tank.show();
	tankControls();
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
	if(keyCode === SHIFT)
		console.log('Boom!');
}