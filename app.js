var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Grass = require('./classes/class.grass');
var GrassEater = require('./classes/class.grass_eater');
var Predator = require('./classes/class.predator');
var Hunter = require('./classes/class.hunter');

app.use(express.static("public"));
app.use(express.static("."));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});



function genMatrix(w, h) {
    var matrixInfo = [];
    for (var y = 0; y < h; y++) {
        matrixInfo[y] = [];
        for (var x = 0; x < w; x++) {
            var random = Math.floor(Math.random() * 102);
            if (random < 20) { random = 0; }
            else if (random < 65  ) { random = 1; }
            else if (random < 90 ) { random = 2; }
            else if (random < 101 ) { random = 3; }
            else if (random < 102 ) { random = 4; }
            matrixInfo[y][x] = random;
        }
    }
    return matrixInfo;
}

matrix = [];
w = 30;
h = 30;
grassArr = [] , grass_eaterArr = [], predatorArr = [], hunterArr = [];


matrix = genMatrix(w, h);
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
        else if (matrix[y][x] == 4) {
            hunterArr.push(new Hunter(x * 1, y * 1, 4));
        }
    }
}


function drawInServer() {
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
    io.sockets.emit('draw matrix',matrix)
}


io.on('connection' , function(socket){
    setInterval(drawInServer , 200);
})
