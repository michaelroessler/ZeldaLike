//
//
//
function loadLevel(lvl) {
	switch (lvl) {
		case 22:
			objs = [];
			
			objs.push(new block([GridR,GridL*1+GridR],1, [0,1]));
			objs.push(new block([GridL*1+GridR,GridL*2+GridR],1, [0,1]));
			objs.push(new block([GridL*2+GridR,GridL*1+GridR],1, [0,1]));
			objs.push(new block([GridL*9+GridR,GridL*0+GridR],1, [0,1]));
			objs.push(new block([GridL*9+GridR,GridL*7+GridR],1, [0,1]));
			objs.push(new block([GridL*0+GridR,GridL*7+GridR],1, [0,1]));
			return true;
			break;
		case 12:
			//
			objs = [];
			
			objs.push(new block([GridL*0+GridR,GridL*0+GridR],1, [0,1]));
			objs.push(new block([GridL*1+GridR,GridL*1+GridR],1, [0,1]));
			objs.push(new block([GridL*2+GridR,GridL*0+GridR],1, [0,1]));
			objs.push(new block([GridL*9+GridR,GridL*0+GridR],1, [0,1]));
			objs.push(new block([GridL*9+GridR,GridL*7+GridR],1, [0,1]));
			objs.push(new block([GridL*0+GridR,GridL*7+GridR],1, [0,1]));
			return true;
			break;
		case 32:
			//
			objs = [];
			
			objs.push(new block([GridL*0+GridR,GridL*0+GridR],1, [0,1]));
			objs.push(new block([GridL*1+GridR,GridL*1+GridR],1, [0,1]));
			objs.push(new block([GridL*2+GridR,GridL*2+GridR],1, [0,1]));
			objs.push(new block([GridL*3+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*3+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*2+GridR,GridL*6+GridR],1, [0,1]));
			objs.push(new block([GridL*1+GridR,GridL*7+GridR],1, [0,1]));
			objs.push(new block([GridL*2+GridR,GridL*6+GridR],1, [0,1]));
			
			objs.push(new block([GridL*3+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*3+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*4+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*4+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*5+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*5+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*6+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*6+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*7+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*7+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*8+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*8+GridR,GridL*5+GridR],1, [0,1]));
			objs.push(new block([GridL*9+GridR,GridL*3+GridR],1, [0,1]));
			objs.push(new block([GridL*9+GridR,GridL*5+GridR],1, [0,1]));
			return true;
			break;
		default:
			return false;
			break;
	}
	return false;
}