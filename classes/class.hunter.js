var Parent = require("./class.parent");

module.exports = class Hunter extends Parent {
                    constructor(x, y, index) {
                        super(x, y, index);
                        this.stamina = 6;
                        this.bullets = 8;
                        this.food = 9;
                        //matrix[this.x][this.y] = this.index;
                    }
                    chooseCell(ch) {
                        this.getNewCoordinates();
                        return super.chooseCell(ch);
                    }
                    getNewCoordinates() {
                        super.getNewCoordinates();
                    }
                    move() {
                        var cell = this.chooseCell(0 || 1)[Math.floor(Math.random() * this.chooseCell(0 || 1).length)];
                        if (cell && this.stamina > 0 ) {
                            this.stamina--;
                            matrix[this.y][this.x] = 0;
                            this.x = cell[0]; this.y = cell[1];
                            matrix[this.y][this.x] = 4;
                            }
                    }
                    eat() {
                        if (this.stamina < 2) {
                            this.food -= 1.5;
                            this.stamina++;
                        }
                    }
                    kill() {
                        var cell = this.chooseCell(2 || 3)[Math.floor(Math.random() * this.chooseCell(2 || 3).length)];
                        if (this.food < 2 && cell > 0) {
                            this.bullets--;
                            if (cell[0] && cell[1] == 2) {
                                for (var i in grass_eaterArr) {
                                    if (grass_eaterArr[i].x == cell[0] && grass_eaterArr[i].y == cell[1]) {
                                        grass_eaterArr.splice(i, 1);
                                       /*Here ----> */ killedGrass_eaters++;
                                       break;
                                    }
                                    this.food++;
                                }
                            }
                            else if (cell[0] && cell[1] == 3) {
                                for (var i in predatorArr) {
                                    if (predatorArr[i].x == cell[0] && predatorArr[i].y == cell[1]) {
                                        predatorArr.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                        }
                        else{
                            this.move();
                        }
                    }
                    die(){
                        if(this.stamina < 2 && this.food < 3 && this.bullets < 1){
                            for (var i in hunterArr) {
                                if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
                                    hunterArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
