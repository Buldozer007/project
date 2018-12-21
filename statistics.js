var fs = require('fs');

var grassInfo = {
    'name' : 'grass',
    'grass-quantity': grassArr.length()
}

var grass_eaterInfo = {
    'name' : 'grass_eater',
    'grass_eater-quantity' : grass_eaterArr.length()
}

var predatorInfo = {
    'name' : 'predator',
    'predator-quantity' : predatorArr.length()
}

var hunterInfo = {
    'name' : 'hunter',
    'hunter-quantity' : hunterArr.length()
}

var grassString = JSON.stringify(grass_eaterInfo , null ,4 );
var grass_eaterString = JSON.stringify(grass_eaterInfo , null , 4);
var predatorString = JSON.stringify(predatorInfo , null , 4);
var hunterString = JSON.stringify(hunterInfo ,null ,4 );

fs.writeFile('stats.json' , grassString + '\n' + grass_eaterString + '\n' + predatorString + '\n' + hunterString , function(err){
    console.log('Everything is fine');
});