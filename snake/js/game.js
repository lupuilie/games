import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'
import {updatePoints} from './gameplay.js'

let lastRenderTime = 0;

const gameBoard = $('#game-board');
let gameOver = false;
let started = false;
let elapsedSeconds = 0;

function main(currentTime) {
	if(gameOver) {
		if(confirm('Ai pierdut! Apasă OK pentru a incerca din nou')) {
			window.location.reload();
		}
		return
	}
	window.requestAnimationFrame(main);
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
	
	lastRenderTime = currentTime;
	
	update()
	draw()
}
window.requestAnimationFrame(main)

function update() {
	updateSnake();
	updateFood();
	updatePoints();
	checkDeath();
}
function draw() {
	gameBoard.html('');
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


export function startCounter() {
	started = true;
	setInterval(function() {
		elapsedSeconds++;
		displayTime();
	}, 1000);
}
export function gameStarted() {
	return started
}
function displayTime() {
	let minutes = parseInt(elapsedSeconds / 60)
	let seconds = elapsedSeconds - (minutes * 60)
	$('#elapsedTime').text(minutes+":"+seconds);
}