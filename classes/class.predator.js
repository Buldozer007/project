var Parent = require('./class.parent');

module.exports = class Predator extends Parent {
                    constructor(x, y, index) {
                        super(x, y, index);
                        this.energy = Math.round(Math.random() * 16);
                        this.speed = 24;
                        this.multiply = Math.round(Math.random() * 16);
                       // matrix[this.y][this.x] = this.index;
                    }
                    chooseCell(ch) {
                        this.getNewCoorinates();
                        return super.chooseCell(ch);
                    }
                    getNewCoorinates() {
                        super.getNewCoorinates();
                    }
                    move() {
                        var cell = this.chooseCell(0)[Math.floor(Math.random() * this.chooseCell(0).length)];
                        if (cell && this.multiply >= this.speed / 2) {
                            this.energy--;
                            matrix[this.y][this.x] = 0;
                            this.x = cell[0]; this.y = cell[1];
                            matrix[this.y][this.x] = 3;
                        }
                    }

                    eat() {
                        this.energy--;
                        var cell = this.chooseCell(2)[Math.floor(Math.random() * this.chooseCell(2).length)];
                        if (cell && this.multiply >= this.speed / 2) {
                            this.energy += this.speed / 2;
                            matrix[this.y][this.x] = 0;
                            this.x = cell[0]; this.y = cell[1];
                            matrix[this.y][this.x] = 3;
                            for (var i in grass_eaterArr) {
                                if (grass_eaterArr[i].x == this.x && grass_eaterArr[i].y == this.y) {
                                    grass_eaterArr.splice(i, 1);
                                }
                            }
                        }
                        else this.move();
                    }

                    mult() {
                        var cell = this.chooseCell(0)[Math.floor(Math.random() * this.chooseCell(0).length)];
                        if (cell && this.energy >= this.speed) {
                            this.energy = 1;
                            var new_predator = new Predator(cell[0], cell[1], 3);
                            predatorArr.push(new_predator);
                        }
                    }

                    die() {
                        if (this.energy <= -(this.speed / 2)) {
                            matrix[this.y][this.x] = 0;
                            for (var i in predatorArr) {
                                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                                    predatorArr.splice(i, 1);
                                }
                            }
                        }
                    }
                }


