import {gameStarted,startCounter} from './game.js'
let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x:0, y: 0};


window.addEventListener('keydown', e=> {
	switch (e.key) {
		case 'ArrowUp': 
			if(!gameStarted()) startCounter()
			if(lastInputDirection.y !==0) break;
			inputDirection = {x: 0, y: -1}
			break;
		case 'ArrowDown': 
			if(!gameStarted()) startCounter()
			if(lastInputDirection.y !==0) break;
			inputDirection = {x: 0, y: 1}
			break;
		case 'ArrowLeft': 
			if(!gameStarted()) startCounter()
			if(lastInputDirection.x !== 0) break;
			inputDirection = {x: -1, y: 0}
			break;
		case 'ArrowRight': 
			if(!gameStarted()) startCounter()
			if(lastInputDirection.x !== 0) break;
			inputDirection = {x: 1, y: 0}
			break;
	}
})

$('#btn-up').click(function(e) {
	if(!gameStarted()) startCounter()
	if(lastInputDirection.y !==0) return
	inputDirection = {x: 0, y: -1}

})
$('#btn-down').click(function() {
	if(!gameStarted()) startCounter()
	if(lastInputDirection.y !==0) return
	inputDirection = {x: 0, y: 1}

})
$('#btn-left').click(function() {
	if(!gameStarted()) startCounter()
	if(lastInputDirection.x !==0) return
	inputDirection = {x: -1, y: 0}

})
$('#btn-right').click(function() {
	if(!gameStarted()) startCounter()
	if(lastInputDirection.x !==0) return
	inputDirection = {x: 1, y: 0}

})


export function getInputDirection() {
	
	lastInputDirection = inputDirection;
	return inputDirection;
}
