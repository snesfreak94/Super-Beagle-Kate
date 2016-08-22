function playerShoot()
{
    var bullet =
    {
        image: document.createElement("img"),
        x: player.x,
        y: player.y,
        width: 5,
        height: 5,
        velocityX: 0,
        velocityY: 0
    };
 
bullet.image.src = "bullet.png";
 
    // start off with a velocity that shoots the bullet straight up
    var velX = 0;
    var velY = 1;
 
    // calculate sin and cos for the player's current rotation
    var s = Math.sin(player.rotation);
    var c = Math.cos(player.rotation);
 
    // for an explanation of this formula,
    // see http://en.wikipedia.org/wiki/Rotation_matrix
    var xVel = (velX * c) - (velY * s);
    var yVel = (velX * s) + (velY * c);
 
    // dont bother storing a direction and calculating the
    // velocity every frame, because it won't change.
    // Just store the pre-calculated velocity
    bullet.velocityX = xVel * BULLET_SPEED;
    bullet.velocityY = yVel * BULLET_SPEED;
 
    // don't forget to set the bullet's position
    bullet.x = player.x;
    bullet.y = player.y;
 
    // finally, add the bullet to the bullets array
    bullets.push(bullet);
}