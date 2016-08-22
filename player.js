var Player = function()
{	
	this.image = document.createElement("img");
	//this.x = canvas.width/2;
	//this.y = canvas.height/2;

	this.position = new Vector2();
	this.position.set( 9*TILE, 0*TILE );
	this.width = 159;
	this.height = 163;
	this.offset = new Vector2();
	this.offset.set(-55,-87);
	this.velocity = new Vector2();
	this.falling = true;
	this.jumping = false;
	this.image.src = "hero.png";  
};

Player.prototype.update = function(deltaTime)
{
// calculate the new position and velocity:
this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));

// collision detection
// Our collision detection logic is greatly simplified by the fact that the player is a rectangle
// and is exactly the same size as a single tile. So we know that the player can only ever
// occupy 1, 2 or 4 cells.
// This means we can short-circuit and avoid building a general purpose collision detection
// engine by simply looking at the 1 to 4 cells that the player occupies:
var tx = pixelToTile(this.position.x);
var ty = pixelToTile(this.position.y);
var nx = (this.position.x)%TILE; // true if player overlaps right
var ny = (this.position.y)%TILE; // true if player overlaps below
var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
}

Player.prototype.draw = function()
{
	context.save();			
		context.translate(this.position.x, this.position.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);	
	context.restore();	
}