
var side = 24;
var w = 30;
var h = 30;
var socket = io();
var color;

function setup() {
    createCanvas(side * w, side * h);
    background("#acacac");
}
function grassColor(currentSeason){
    if (currentSeason == "Winter") color = "#fffafa";
    else if(currentSeason == "Spring") color = "green";
    else if(currentSeason == "Summer" || "Fall") color = "#9acd32";
}
function drawMatrix(matrix , currentSeason) {
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill(color);
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
socket.on('draw matrix', drawMatrix);
socket.on('change season' , grassColor);
