
var Player = function() {
	this.image = document.createElement("img");
	
	this.width = 159;
	this.height = 163;
	
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
	context.save();
	context.translate(this.position.x, this.position.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}