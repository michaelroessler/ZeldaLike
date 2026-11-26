//
//
//
function loadLevel(lvl) {
	//var LevelData = document.getElementById("leveldata").textContent;
	//var LevelData = '{"12": { "objs": [ {"id":1, "x":0, "y":0},{"id":1, "x":0, "y":7},{"id":1, "x":1, "y":1},{"id":1, "x":2, "y":0},{"id":1, "x":9, "y":0},{"id":1, "x":9, "y":7} ]},"22": { "objs": [ {"id":1, "x":0, "y":1},{"id":1, "x":0, "y":7},{"id":1, "x":1, "y":2},{"id":1, "x":2, "y":1},{"id":1, "x":9, "y":0},{"id":1, "x":9, "y":7} ] },"32": { "objs": [ {"id":1, "x":0, "y":1},{"id":1, "x":0, "y":7},{"id":1, "x":1, "y":2},{"id":1, "x":2, "y":1},{"id":1, "x":9, "y":0},{"id":1, "x":9, "y":7} ] }}';
	//console.log(LevelData);
	objs = [];
	var json = JSON.parse(LevelData);
	lvl = String(lvl);
	if (json[lvl] != null) {
		//json = json[lvl];
		//console.log(JSON.stringify(json["objs"][0]["id"]));
		for (var i = 0; i < json[lvl]["objs"].length; i++) {
			createObject(json[lvl]["objs"][i]["id"], json[lvl]["objs"][i]["x"], json[lvl]["objs"][i]["y"]);
		}
		
		return true;
	}
	
	/*switch (lvl) {
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
	}*/
	return false;
}

function createObject(id, x, y) {
	console.log("Create");
	switch (id) {
		case 1:
			objs.push(new block([GridL*x+GridR,GridL*y+GridR],1, [0,1]));
			break;
			
	}
}