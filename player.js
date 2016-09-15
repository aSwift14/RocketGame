
var Player = function() {
	this.image = document.createElement("img");
	
	this.image.src = "Rocket1.png";
	
};


Player.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	
	// check keypress events
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) 
	{
		left = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) 
	{
		right = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		up = true;
		this.image.src = "Rocket2.png";
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		down = true;
	}
	
	
	}

Player.prototype.draw = function()
{
	
}