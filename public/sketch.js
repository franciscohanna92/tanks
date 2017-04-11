// Variable para mantener la conexion a traves del socket
var socket;

var tankVelocity = 1;
var tank;
var tanks = [];
var bullets = [];

// Variable para deteccion de colison 
var hit = false;
var canvas;

function setup(){
	canvas = createCanvas(800, 600);
	socket = io.connect('http://localhost:3000', {'force new connection': true });

	var tankColor = {
		'r': random(100, 255).toFixed(0), 
		'g': random(100, 255).toFixed(0), 
		'b': random(100, 255).toFixed(0)
	};
	tank = new Tank(width/2, height/2, 24, 'right', tankColor);

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

	collideDebug(true, 10 , "#aa0000");
}

function draw() {
	background(32);

	tank.show();
	tankControls();

	// translate(width/2 - tank.center.x, height/2 - tank.center.y);

	rectMode(CORNER);
	stroke(0)
	strokeWeight(0);
	fill("blue");
	rect(100, 100, 50, 50);

	// Mostrar balas disparadas
	for (var i = bullets.length - 1; i >= 0; i--) {
		bullets[i].show();
		hit = collideLineRect(bullets[i].ini.x, bullets[i].ini.y, bullets[i].fin.x ,bullets[i].fin.y, 100, 100, 50, 50);
		if(bullets[i].mustDestroy() || hit) {
			bullets.splice(i,1);
		}
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


/**** TANK CONTROLS ****/
var enableShoot = true;
setInterval(function(){ enableShoot = true; }, 0);
function keyPressed(){
	if(enableShoot == true) {
		if(key === ' '){
			bullet = new Bullet(tank.center.x, tank.center.y, tank.facing);
			bullets.push(bullet);
			enableShoot = false;
		}
	}
}
function tankControls(){
	if(keyIsDown(87)){
		// UP
		tank.update(0, -tankVelocity);
		tank.facing = 'up';
	} else if (keyIsDown(68)) {
		// RIGHT
		tank.update(tankVelocity, 0);
		tank.facing = 'right';
	} else if (keyIsDown(83)) {
		// DOWN
		tank.update(0, tankVelocity);
		tank.facing = 'down';
	} else if (keyIsDown(65)) {
		// LEFT
		tank.update(-tankVelocity, 0);
		tank.facing = 'left';		
	}
}