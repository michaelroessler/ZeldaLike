//
//
//
function loadLevel(lvl) {
	//var LevelData = document.getElementById("leveldata").textContent;
	//var LevelData = '{"12": { "objs": [ {"id":1, "x":0, "y":0},{"id":1, "x":0, "y":7},{"id":1, "x":1, "y":1},{"id":1, "x":2, "y":0},{"id":1, "x":9, "y":0},{"id":1, "x":9, "y":7} ]},"22": { "objs": [ {"id":1, "x":0, "y":1},{"id":1, "x":0, "y":7},{"id":1, "x":1, "y":2},{"id":1, "x":2, "y":1},{"id":1, "x":9, "y":0},{"id":1, "x":9, "y":7} ] },"32": { "objs": [ {"id":1, "x":0, "y":1},{"id":1, "x":0, "y":7},{"id":1, "x":1, "y":2},{"id":1, "x":2, "y":1},{"id":1, "x":9, "y":0},{"id":1, "x":9, "y":7} ] }}';
	//console.log(LevelData);
	
	var json = JSON.parse(LevelData);
	lvl = String(lvl);
	//console.log(JSON.stringify(json));
	if (json[lvl] != null) {
		objs = [];
		//json = json[lvl];
		//console.log(JSON.stringify(json["objs"][0]["id"]));
		for (var i = 0; i < json[lvl]["objs"].length; i++) {
			objs.push(createObject(json[lvl]["objs"][i]["id"], json[lvl]["objs"][i]["x"], json[lvl]["objs"][i]["y"]));
		}
		//console.log(JSON.stringify(objs));
		return true;
	}
	return false;
}

function createObject(id, x, y) {
	//console.log("Create " + id);
	switch (id) {
		case 0:
			return null;
			break;
		case 1:
			//objs.push(new block([GridL*x+GridR,GridL*y+GridR],1, [0,1]));
			return new block([GridL*x+GridR,GridL*y+GridR],1, [0,1]);
			break;
			
	}
}