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
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) 
	{
		left = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_A) == true) 
	{
		a = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) 
	{
		right = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_D) == true) 
	{
		d = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		up = true;
		this.image.src = "Rocket2.png";
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_W) == true)
	{
		w = true;
		this.image.src = "Rocket2.png";
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		down = true;
		this.image.src = "Rocket1.png";
	}
		
		if(keyboard.isKeyDown(keyboard.KEY_S) == true)
	{
		s = true;
		this.image.src = "Rocket1.png";
	}
	
		if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		space = true;
	}
		
	}
	
Player.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}