function genMatrix(w, h) {
    var matrixInfo = [];
    for (var y = 0; y < h; y++) {
        matrixInfo[y] = [];
        for (var x = 0; x < w; x++) {
            var random = Math.floor(Math.random() * 105);
            if (random < 20) { random = 0; }
            else if (random < 65 && random > 20) { random = 1; }
            else if (random < 90 && random > 65) { random = 2; }
            else if (random < 100 && random > 90) { random = 3; }
            else if (random < 105 && random > 100) { random = 4; }
            matrixInfo[y][x] = random;
        }
    }
    return matrixInfo;
}

var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [], grass_eaterArr = [], predatorArr = [], hunterArr = [];

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w, side * h);
    background("#acacac");
    frameRate(1);
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
            }
            else if (matrix[y][x] == 2) {
                grass_eaterArr.push(new GrassEater(x * 1, y * 1, 2));
            }
            else if (matrix[y][x] == 3) {
                predatorArr.push(new Predator(x * 1, y * 1, 3));
            }
            else {
                hunterArr.push(new Hunter(x * 1, y * 1, 4));
            }
        }
    }
}

function draw() {
    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult();
    }

    for (var i in grass_eaterArr) {
        grass_eaterArr[i].mult();
        grass_eaterArr[i].eat();
        grass_eaterArr[i].die();
    }

    for (var i in predatorArr) {
        predatorArr[i].mult();
        predatorArr[i].eat();
        predatorArr[i].die();
    }

    for (var i in hunterArr) {
        hunterArr[i].move();
        hunterArr[i].eat();
        hunterArr[i].kill();
        hunterArr[i].die();
    }

}