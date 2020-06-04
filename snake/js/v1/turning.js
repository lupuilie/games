
function turnSnake(direction) {
	switch (direction) {
		case 'up':
			snakeBody[0].x += 0;
			snakeBody[0].y += -1;
			lastTurnDir = 'up';
			break;
		case 'left':
			snakeBody[0].x += -1;
			snakeBody[0].y += 0;
			lastTurnDir = 'left';
			break;
		case 'right':
			snakeBody[0].x += 1;
			snakeBody[0].y += 0;
			lastTurnDir = 'right';
			break;
		case 'down':
			snakeBody[0].x += 0;
			snakeBody[0].y += 1;
			lastTurnDir = 'down';
			break;
		default:
			snakeBody[0].x += 0;
			snakeBody[0].y += 0;
	}
}

$('#btn-up').click(function () {
	if (lastTurnDir != 'up') turnSnake('up');
});
$('#btn-down').click(function () {
	if (lastTurnDir != 'down') turnSnake('down');
});
$('#btn-left').click(function () {
	if (lastTurnDir != 'left') turnSnake('left');
});
$('#btn-right').click(function () {
	if (lastTurnDir != 'right') turnSnake('right');
});
