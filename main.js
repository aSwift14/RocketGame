//------ ROCKET GAME ------//

//Setting of Canvas
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

//Screen Variables
var SCREEN_HEIGHT = canvas.height;
var SCREEN_WIDTH = canvas.width;

// Delta Time
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

//Game State Variables
var STATE_MENUSCREEN = 0;
var STATE_GAME = 1;
var STATE_GAMEOVER = 2;
var STATE_UPGRADEMENU = 3;

var gameState = STATE_MENUSCREEN;

    //Timers
    var menuTimer = 3;

//Game Variables
var background = new background();
var player = new Player();
var keyboard = new Keyboard();

//Create array for Asteroid
var asteroids = [];

//Random Number for Asteroid Spawning
function rand(floor, ceil) {
    return Math.floor((Math.random() * (ceil - floor)) + floor);
}

//Asteroid Variables
var ASTEROID_SPEED = rand(30, 60);
var spawnTimer = 0;

//Get DeltaTime
function getDeltaTime() {
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

	if (deltaTime > 1)
		deltaTime = 1;

	return deltaTime;
}

// Run Statement
function run () {	
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    var deltaTime = getDeltaTime();

    //Game States
    switch (gameState) {
        case STATE_MENUSCREEN:
            runMainMenu(deltaTime);
            break;
        case STATE_GAME:
            runGame(deltaTime);			
            break;
        case STATE_GAMEOVER:
            runGameOver(deltaTime);
            break;
        case STATE_UPGRADEMENU:
            runUpgradeMenu(deltaTime);
            break;
    }
}
// newly spawned objects start at Y=25
var spawnLineY = -10;

// spawn a new object every 1500ms
var spawnRate = 1000;

// set how fast the objects will fall
var spawnRateOfDescent = 0.5;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();

function spawnRandomObject() {

    // select a random type for this new object
    var t;

    // About Math.random()
    // Math.random() generates a semi-random number
    // between 0-1. So to randomly decide if the next object
    // will be A or B, we say if the random# is 0-.49 we
    // create A and if the random# is .50-1.00 we create B

    if (Math.random() < 0.50) {
        t = "red";
    } else {
        t = "blue";
    }

    // create the new object
    var object = {
        // set this objects type
        type: t,
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
    }

    // add the new object to the objects[] array
    objects.push(object);
}



function animate() {

    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new object
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }

    // draw the line where new objects are spawned
    context.beginPath();
    context.moveTo(0, spawnLineY);
    context.lineTo(canvas.width, spawnLineY);
    context.stroke();

    // move each object down the canvas
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        context.beginPath();
        context.arc(object.x, object.y, 8, 0, Math.PI * 2);
        context.closePath();
        context.fillStyle = object.type;
        context.fill();

        object.y += spawnRateOfDescent;
    }

}

function runMainMenu(deltaTime) {
    //Background
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    //Text
    context.fillStyle = "#000";
	context.font = "24px Arial";
	context.fillText("Rocket Game", 140, 300);

    //Menu Timer
    menuTimer -= deltaTime;
    if (menuTimer <= 0) {
        gameState = STATE_GAME;
    }


}
function runGame(deltaTime) {
	background.draw();
    player.update(deltaTime);
    player.draw();
    animate();
}
function runGameOver(deltaTime) {
}
function runUpgradeMenu(deltaTime) {
}





// ---- DO NOT EDIT ANYTHING BELOW THIS FRIENDS ---- //
(function () {
	var onEachFrame;
	if (window.requestAnimationFrame) {
		onEachFrame = function (cb) {
			var _cb = function () { cb(); window.requestAnimationFrame(_cb); }
			_cb();
		};
	} else if (window.mozRequestAnimationFrame) {
		onEachFrame = function (cb) {
			var _cb = function () { cb(); window.mozRequestAnimationFrame(_cb); }
			_cb();
		};
	} else {
		onEachFrame = function (cb) {
			setInterval(cb, 1000 / 60);
		}
	}

	window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);