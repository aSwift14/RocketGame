var Player = function() {
	this.image = document.createElement("img");

	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 159;
	this.height = 163;
	
	this.offset = new Vector2();
	this.offset.set(-159,-163);
	
	this.image.src = "Rocket1.png";
	
	this.velocity = new Vector2();
	
};

var positionX = 200;
var positionY = 200;

Player.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var space = false;
	var PLAYER_SPEED = 2;

//Check if Key is Down
	if((keyboard.isKeyDown(keyboard.KEY_LEFT) == true)  || (keyboard.isKeyDown(keyboard.KEY_A) == true))
	{
		left = true;
		player.positionX += 1;
	}
		
	if((keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)  || (keyboard.isKeyDown(keyboard.KEY_D) == true)) 
	{
		right = true;
	}
	if((keyboard.isKeyDown(keyboard.KEY_UP) == true)  || (keyboard.isKeyDown(keyboard.KEY_W) == true)) { 
		up = true;
		this.image.src = "Rocket2.png";	
	} else { 
	this.image.src = "Rocket1.png";
	}
		
	if((keyboard.isKeyDown(keyboard.KEY_DOWN) == true)  || (keyboard.isKeyDown(keyboard.KEY_S) == true))
	{
		down = true;
		this.image.src = "Rocket1.png";
	}
			
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		space = true;
	}
	
//Add Player Speed
	if (left == true) {
		this.position.x -= PLAYER_SPEED;
	}
	if (right == true) {
		this.position.x += PLAYER_SPEED;
	}
	if (up == true) {
		this.position.y -= PLAYER_SPEED;
	}
	if (down == true) {
		this.position.y += PLAYER_SPEED;
	}
	
// Position Boundaries
	if (this.position.x <= 0) {
		this.position.x += PLAYER_SPEED;
	}
	if (this.position.x >= SCREEN_WIDTH) {
		this.position.x -= PLAYER_SPEED;
	}
	if (this.position.y <= 0) {
		this.position.y += PLAYER_SPEED;
	}
	if (this.position.y >= SCREEN_HEIGHT) {
		this.position.y -= PLAYER_SPEED;
	}
	
	
		// calculate the new position and velocity:
	this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
		
}
	
Player.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}