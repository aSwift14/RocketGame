//Intersect Function
function intersects(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (y2 + h2 < y1 ||
        x2 + w2 < x1 ||
        x2 > x1 + w1 ||
        y2 > y1 + h1) {
        return false;
    }
    return true;
}

//Spawn Asteroids
function spawnAsteroid(deltaTime) {
    //Make Size of Asteroid Different
    var type = rand(0, 3);

    //Create Asteroid
    var asteroid = {};

    asteroid.image = document.createElement("img");
    asteroid.image.src = "asteroid.png";
    asteroid.width = 64;
    asteroid.height = 64;

    //Set Random direction
    var x = SCREEN_WIDTH / 2;
    var y = SCREEN_HEIGHT / 2;

    var dirX = rand(-10, 10);
    var dirY = rand(-10, 10);

    //Normalize direction
    var magnitude = (dirX * dirX) + (dirY * dirY);
    if (magnitude != 0) {
        var oneOverMag = 1 / Math.sqrt(magnitude);
        dirX *= oneOverMag;
        dirY *= oneOverMag;
    }
    //Multiply the dirX/Y by the screen width to move that amount from 
    //the centre of the screen
    var movX = dirX * SCREEN_WIDTH;
    var movY = dirY * SCREEN_HEIGHT;

    //Add the direction
    asteroid.x = x + movX;
    asteroid.y = y + movY;

    //Set Move Speed
    asteroid.velocityX = -dirX * ASTEROID_SPEED;
    asteroid.velocityY = -dirY * ASTEROID_SPEED;

    //Push to end of array
    asteroids.push(asteroid);

}
// Checks for Asteroid
function asteroidChecks (deltaTime) {
    //Update Asteroids in array
    for (var i = 0; i < asteroids.length; i++) {
        //Update Asteroids Position According to Velocity
        asteroids[i].x = asteroids[i].x + asteroids[i].velocityX * deltaTime;
        asteroids[i].y = asteroids[i].y + asteroids[i].velocityY * deltaTime;

        //TODO : Check if Asteroid = Out of Bonds, if so, comes back from other side.
    }
    // Draw All Asteroids
    for (var i = 0; i < asteroids.length; i++) {
        context.drawImage(asteroids[i].image, asteroids[i].x - asteroids[i].width / 2, asteroids[i].y - asteroids[i].height / 2);
    }
    spawnTimer -= deltaTime;
    if (spawnTimer <= 0) {
        spawnTimer = 1;
        spawnAsteroid();
    }

    //Check for Collision - Asteroid with Player
    for (var i = 0; i < asteroids.length; i++) {
        if (intersects(
            player.x - player.width / 2, player.y - player.height / 2,
            player.width, player.height,
            asteroids[i].x - asteroids[i].width / 2, asteroids[i].y - asteroids[i].height / 2,
            asteroids[i].width, asteroids[i].height) == true) {
            }
            break;
}
}
