function genMatrix(w , h){
	var matrixInfo = [];
	for (var y = 0 ; y < h ; y++) {
		matrixInfo[y] = [];
		for(var x = 0; x < w ;x++ ){
			var random = Math.floor(Math.random()*100);
			if 		(random < 20)  				  {random = 0;}
			else if (random < 65 && random > 20 ) {random = 1;} 
		    else if (random < 90 && random > 65 ) {random = 2;}
			else if (random < 100 && random > 90) {random = 3;}
			matrixInfo[y][x]= random;
		}
	}
	return matrixInfo;
}

var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [], grass_eaterArr = [], predatorArr = [];

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w, side * h);
    background("#acacac");
    frameRate(5);
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 1) {
                grassArr.push(new Grass(x*1, y*1, 1));
            }
            else if(matrix[y][x] == 2) {
                grass_eaterArr.push(new GrassEater(x*1, y*1, 2));
            }
            else if(matrix[y][x] == 3) {
                predatorArr.push(new Predator(x*1, y*1, 3))
            }
        }
    }
}

function draw() {
    background("#acacac");
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if(matrix[y][x] == 1) {
                fill("green");
            }
            else if(matrix[y][x] == 2) {
                fill("yellow");
            }
            else if(matrix[y][x] == 3) {
                fill("red");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for(var i in grassArr) {
        grassArr[i].mult();
    }

    for(var i in grass_eaterArr) {
        grass_eaterArr[i].mult();
        grass_eaterArr[i].eat();
        grass_eaterArr[i].die();
    }

    for(var i in predatorArr) {
        predatorArr[i].mult();
        predatorArr[i].eat();
        predatorArr[i].die();
    }

}