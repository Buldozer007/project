var Parent = require('./class.parent');

module.exports = class GrassEater extends Parent {
                    constructor(x, y, index) {
                        super(x, y, index);
                        this.energy = Math.round(Math.random() * 8);
                        this.multiply = Math.round(Math.random() * 8);
                        this.speed = 8;
                        //matrix[this.y][this.x] = this.index;
                    }
                    chooseCell(ch) {
                        this.getNewCoordinates();
                        return super.chooseCell(ch);
                    }

                    getNewCoordinates() {
                       super.getNewCoordinates();
                    }

                    move() {
                        var cell = this.chooseCell(0)[Math.floor(Math.random() * this.chooseCell(0).length)];
                        if (cell && this.multiply >= this.speed / 4) {
                            this.energy--;
                            matrix[this.y][this.x] = 0;
                            this.x = cell[0]; this.y = cell[1];
                            matrix[this.y][this.x] = 2;
                            this.multiply = 0;
                        }
                    }

                    eat() {
                        this.energy--;
                        this.multiply++;
                        var cell = this.chooseCell(1)[Math.floor(Math.random() * this.chooseCell(1).length)];
                        if (cell && this.multiply >= this.speed / 4) {
                            this.energy += this.speed;
                            matrix[this.y][this.x] = 0;
                            this.x = cell[0]; this.y = cell[1];
                            matrix[this.y][this.x] = 2;
                            for (var i in grassArr) {
                                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                                    grassArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else this.move();

                    }

                    mult() {
                        var cell = this.chooseCell(0)[Math.floor(Math.random() * this.chooseCell(0).length)];
                        if (cell && this.energy >= this.speed) {
                            this.energy = 1;
                            var new_grass_eater = new GrassEater(cell[0], cell[1], 2);
                            grass_eaterArr.push(new_grass_eater);
                        }
                    }

                    die() {
                        if (this.energy <= -(this.speed / 2)) {
                            matrix[this.y][this.x] = 0;
                            for (var i in grass_eaterArr) {
                                if (grass_eaterArr[i].x == this.x && grass_eaterArr[i].y == this.y) {
                                    grass_eaterArr.splice(i, 1);
                                    /*Here ---->*/diedGrass_eaters++;
                                    break;
                                }
                            }
                        }
                    }
                }
