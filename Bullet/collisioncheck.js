// tests if two rectangles are intersecting.
// Pass in the x,y coordinates, width and height of each rectangle.
// Returns 'true' if the rectangles are intersecting
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
    if(y2 + h2 < y1 ||
    x2 + w2 < x1 ||
    x2 > x1 + w1 ||
    y2 > y1 + h1)
    {
        return false;
    }
    return true;
}

// check if any bullet intersects an enemy. If so, kill them both
    for(var i=0; i<asteroids.length; i++)
    {
        for(var j=0; j<bullets.length; j++)
        {
            if(intersects(
                bullets[j].x - bullets[j].width/2, bullets[j].y -
                    bullets[j].height/2,
                bullets[j].width, bullets[j].height,
                asteroids[i].x- asteroids[i].width/2, asteroids[i].y -
                    asteroids[i].height/2,
                asteroids[i].width, asteroids[i].height) == true)
                {
                    score = score + 100;
                    asteroids.splice(i, 1);
                    bullets.splice(j, 1);
                    break;
                }
        }
    }

    if(enemy.isDead == false)
        {
            var hit = intersects(
                bullet.x, bullet.y,
                bullet.width, bullet.height,
                enemy.x, enemy.y,
                enemy.width, enemy.height);
            if(hit == true)
            {
                bullet.isDead = true;
                enemy.isDead = true;
            }
        }
        if(bullet.x < 0 || bullet.x > SCREEN_WIDTH ||
            bullet.y < 0 || bullet.y > SCREEN_HEIGHT)
        {
            bullet.isDead = true;
        }