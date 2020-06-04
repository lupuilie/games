function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function relocateFood() {
	var randX = getRndInteger(0, 21);
	var randY = getRndInteger(0, 21);
	snakeFood = [{
		x: randX,
		y: randY
	}];
	//console.log(points);
}


function foodSpawn() {
	
	if (snakeBody[0].y == snakeFood[0].y && snakeBody[0].x == snakeFood[0].x) {

		var foodLocation = {
			x: snakeFood[0].x,
			y: snakeFood[0].y
		};
		console.log(foodLocation);
		snakeBody.push(foodLocation);
		points++;
		relocateFood();
	}


	if (snakeBody[0].x > 21) resetGame();
	if (snakeBody[0].x < 1) resetGame();
	if (snakeBody[0].y < 1) resetGame();
	if (snakeBody[0].y > 21) resetGame();
}