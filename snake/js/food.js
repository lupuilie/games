import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1

export function update() {
	if(onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = randomGridPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.append(foodElement);
}

function getRandomFoodPosition() {
	let newFoodPosition;
	while (newFoodPosition == null || onSnake(newFoodPosition)){
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}