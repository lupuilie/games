import {getSnakeLength, setSnakeSpeed} from './snake.js'

const SPEED = [
	2.5,
	3,
	3.5,
	4,
	4.5,
	5
];
const POINT = [
	3,
	4,
	5,
	10,
	15,
	20
];

let currentScore = 0;
export function updatePoints() {
	currentScore = getSnakeLength() -1;
	$('#score').text(currentScore);

	POINT.some(function(currentValue, index) {
		if(currentValue == currentScore) {
			setSnakeSpeed(SPEED[index]);
		}
	});
}
