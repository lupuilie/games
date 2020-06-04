
function update() {

	for (i = snakeBody.length - 2; i >= 0; i--) {
		// start game when a button is pressed
		if (!lastTurnDir) {
			return
		} else {
			snakeBody[i + 1] = {
				...snakeBody[i]
			}
		}
	}
	
	turnSnake(lastTurnDir);
	
	foodSpawn();

}