var side = 24;
var w = 30;
var h = 30;
var socket = io();
var season;

function setup() {
    createCanvas(side * w, side * h);
    background("#acacac");
}

function getSeason(currentSeason){
    document.getElementById('season').textContent = currentSeason;
    season = currentSeason;
}

function drawMatrix(matrix) {
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                season == "Winter" ? fill('powderblue') : fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                if (season == "Winter") fill("snow");
                else if(season == "Spring") fill("green");
                else if(season == "Summer" || "Fall") fill("yellowgreen");
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
socket.on('change season' , getSeason);

