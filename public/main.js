//function main() {
    var side = 24;
    var w = 30;
    var h = 30;
    var socket = io();

    function setup() {
        frameRate(5);
        createCanvas(side * w, side * h);
        background("#acacac");
    }

    function drawMatrix(matrix) {
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
    }

    socket.on('draw  matrix', drawMatrix);
//}

//window.onload = main;