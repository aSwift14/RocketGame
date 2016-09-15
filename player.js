var Player = function() {
	this.image = document.createElement("img");

	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 159;
	this.height = 163;
	
	this.offset = new Vector2();
	this.offset.set(-55,-87);
	
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
	var w = false;
	var a = false;
	var s = false;
	var d = false;
	var space = false;

	// check keypress events
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) || if(keyboard.isKeyDown(keyboard.KEY_A) == true) 
	{
		left = true;
		a = true;
		player.positionX += 1;
	}
		
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT || if(keyboard.isKeyDown(keyboard.KEY_D) == true) 
	{
		right = true;
		d = true;
	}
		
	if(keyboard.isKeyDown(keyboard.KEY_UP) || if(keyboard.isKeyDown(keyboard.KEY_W) == true)
	{
		up = true;
		w = true;
		this.image.src = "Rocket2.png";
		
	}
		
	if(keyboard.isKeyDown(keyboard.KEY_DOWN || if(keyboard.isKeyDown(keyboard.KEY_S) == true)
	{
		down = true;
		this.image.src = "Rocket1.png";
	}
			
		if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		space = true;
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