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

function runMainMenu(deltaTime) {
    console.log("am i working?");
    //Background
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    //Text
    context.fillStyle = "#000";
	context.font = "24px Arial";
	context.fillText("Rocket Game", 140, 300);

	context.fillStyle = "#000";
	context.font = "16px Arial";
	context.fillText("Press ENTER to Start!", 140, 328);

    if (keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
    {
        gameState = STATE_GAME;
    }
}
function runGame(deltaTime) {
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
