
function main() {
    var side = 24;
    var socket = io();
    var w, h = 30

    function setup() {
        //matrix = genMatrix(w, h);
        createCanvas(side * w, side * h);
        background("#acacac");
    }


    function drawMatrix(matrix) {
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
    }

    socket.on('draw  matrix', drawMatrix);
}

window.onload = main;