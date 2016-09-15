
var Player = function() {
	this.image = document.createElement("img");
	
};


Player.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var up = false;
	
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
	}
	
	
	}

Player.prototype.draw = function()
{
	
}