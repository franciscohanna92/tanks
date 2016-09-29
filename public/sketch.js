// Variable para mantener la conexion a traves del socket
var socket;

var vel = 6;

var tank;
var tanks = [];
var bullets = [];

function setup(){
	createCanvas(350, 350);
	socket = io.connect('http://localhost:3000', {'force new connection': true });

	var tankColor = {
					 'r': random(100, 255).toFixed(0), 
					 'g': random(100, 255).toFixed(0), 
					 'b': random(100, 255).toFixed(0)
					};
	tank = new Tank(random(0, width), random(0, height), 24, 'right', tankColor);

	var data = {
		cx: 	tank.center.x,
		cy: 	tank.center.y,
		r: 		tank.radius,
		f: 		tank.facing, 
		col: 	tank.color
	};
	socket.emit('start',data);	

	socket.on('heartbeat', function(data){
		tanks = data;
		//console.log(data);
	});
}

function draw(){
	background(51);
	tank.show();
	tankControls();

	// Mostrar balas disparadas
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show();
	}

	// Mostrar tanques de otros jugadores
	for (var i = 0; i < tanks.length; i++) {
		id = tanks[i].id;
		if (id.substring(2, id.length) !== socket.id) {
			var mpTank = new Tank(tanks[i].centerX, tanks[i].centerY, tanks[i].radius, tanks[i].facing, tanks[i].color);
			mpTank.show();
			//console.log(mpTank);
		}
	}
	
	var data = {
		cx:  tank.center.x,
		cy:  tank.center.y,
		r: 	 tank.radius,
		f: 	 tank.facing,
		col: tank.color
	};
	socket.emit('update', data);
}

function keyPressed(){
	if(key === ' '){
		bullet = new Bullet(tank.center.x, tank.center.y, tank.facing);
		bullets.push(bullet);
	}
}

function tankControls(){
	if(keyIsDown(87)){
		// UP
		tank.update(0, -vel);
		tank.facing = 'up';
	} else if (keyIsDown(68)) {
		// RIGHT
		tank.update(vel, 0);
		tank.facing = 'right';
	} else if (keyIsDown(83)) {
		// DOWN
		tank.update(0, vel);
		tank.facing = 'down';
	} else if (keyIsDown(65)) {
		// LEFT
		tank.update(-vel, 0);
		tank.facing = 'left';		
	}

}