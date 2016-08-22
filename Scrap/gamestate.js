var splashTimer = 6;
function runSplash(deltaTime)
{
    drawTiles();
 
    splashTimer -= deltaTime;
    if(splashTimer <= 0)
    {
        gameState = STATE_GAME;
        return;
    }
    context.fillStyle = "#FFFF00";
    context.font="72px Impact";
    context.fillText("PLATFORMER!", 140, 240);

    score = 0;
}

