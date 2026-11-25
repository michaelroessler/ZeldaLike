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
			po.moveU(0);
			break;
		case "KeyA":
			console.log('A pressed');
			po.moveL(0);
			break;
		case "KeyS":
			console.log('S pressed');
			po.moveD(0);
			break;
		case "KeyD":
			console.log('D pressed');
			po.moveR(0);
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
			po.moveU(1);
			break;
		case "KeyA":
			console.log('A released');
			po.moveL(1);
			break;
		case "KeyS":
			console.log('S released');
			po.moveD(1);
			break;
		case "KeyD":
			console.log('D released');
			po.moveR(1);
			break;
		case "ShiftLeft":
		case "ShiftRight":
			console.log('Shift released');
			break;
		
	}
});
