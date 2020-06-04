var lastRenderTime = 0;
var SNAKE_SPEED = 2.5;
var snakeBody = [
	{x: 10,y: 11},
	{x: 9,y: 11},
	{x: 8,y: 11}
];
var snakeFood = [{x: 10,y: 14}];
var gameBoard = $("#game-board");
var points = 0;
var lastTurnDir = 0;

function main(currentTime) {
	window.requestAnimationFrame(main);
	var secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

	lastRenderTime = currentTime;

	update();
	draw(gameBoard);

}
window.requestAnimationFrame(main);

function resetGame() {
	console.log('Game reset');
	alert('You lost!');
	snakeBody = [
		{x: 10,y: 11},
		{x: 9,y: 11},
		{x: 8,y: 11}
	];
	lastTurnDir = 0;
	turnSnake();
}


function draw(gameBoard) {
	gameBoard.html('');
	
	snakeBody.forEach(function (segment, index) {
		snakeElement = document.createElement('div');
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add('snake');
		snakeElement.innerHTML = index;
		gameBoard.append(snakeElement);
	});
	
	// first meal
	var foodElement = document.createElement('div');
	foodElement.style.gridRowStart = snakeFood[0].y;
	foodElement.style.gridColumnStart = snakeFood[0].x;
	foodElement.classList.add('food');
	gameBoard.append(foodElement);
}
