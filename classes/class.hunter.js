class Hunter extends Parent {
    constructor(x, y, index) {
        super(x, y, index);
        this.stamina = 10;
        this.bullets = 12;
        this.food = 15;
        matrix[this.x][this.y] = this.index;
    }
    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }
    getNewCoordinates() {
        super.getNewCoorinates();
    }
    move() {
        var cell = random(this.chooseCell(0));
        if (this.stamina > 0) {
            this.stamina--;
            matrix[this.y][this.x] = 0;
            this.x = cell[0]; this.y = cell[1];
            matrix[this.y][this.x] = 4;
        }
    }
    eat() {
        if (this.stamina < 2) {
            this.food -= 2;
            this.stamina++;
        }
    }
    kill() {
        var cell = random(this.chooseCell(2 || 3));
        if (this.food < 3) {
            this.bullets--;
            this.x = cell[0]; this.y = cell[1];
            matrix[this.y][this.x] = 3;
            if (matrix[this.x][this.y] == 2) {
                for (var i in grass_eaterArr) {
                    if (grass_eaterArr[i].x == this.x && grass_eaterArr[i].y == this.y) {
                        grass_eaterArr.splice(i, 1);
                    }
                    this.food++;
                }
            }
            else if (matrix[this.x][this.y] == 3) {
                for (var i in predatorArr) {
                    if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                        predatorArr.splice(i, 1);
                    }
                }
            }
        }
    }
    die(){
        if(this.stamina < 2 && this.food < 3 && this.bullets < 1){
            for (var i in hunterArr) {
                if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
                    hunterArr.splice(i, 1);
                }
            }
        }
    }
}