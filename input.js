//
//
//
addEventListener('keydown', event => {
	
	switch (event.code) {
		case "Space":
			console.log('Space pressed');
			break;
		case "KeyW":
			console.log('W pressed');
			break;
		case "KeyA":
			console.log('A pressed');
			break;
		case "KeyS":
			console.log('S pressed');
			break;
		case "KeyD":
			console.log('D pressed');
			break;
		case "ShiftLeft"://open case continues to next case
		case "ShiftRight":
			console.log('Shift pressed');
			break;
		
	}
});

addEventListener('keyup', event => {
	
	switch (event.code) {
		case "Space":
			console.log('Space released');
			break;
		case "KeyW":
			console.log('W released');
			break;
		case "KeyA":
			console.log('A released');
			break;
		case "KeyS":
			console.log('S released');
			break;
		case "KeyD":
			console.log('D released');
			break;
		case "ShiftLeft":
		case "ShiftRight":
			console.log('Shift released');
			break;
		
	}
});
