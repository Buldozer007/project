var Parent = require('./class.parent')

module.exports = class Grass extends Parent {
                    constructor(x, y, index) {
                        super(x, y, index)
                        this.multiply = Math.round(Math.random() * 8);
                        this.speed = 8;
                    }
                    chooseCell(ch) {
                        return super.chooseCell(ch);
                    }

                    mult() {
                        this.multiply++;
                        this.direction = this.chooseCell(0)[Math.floor(Math.random() * this.chooseCell(0).length)];
                        if (this.multiply >= this.speed && this.direction) {
                            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
                            newGrass.parentX = this.x;
                            newGrass.parentY = this.y;
                            grassArr.push(newGrass);
                            matrix[this.direction[1]][this.direction[0]] = this.index;
                            this.multiply = 0;
                        }
                    }
                }