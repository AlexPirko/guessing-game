
class GuessingGame {

    constructor() {
        this.minNum = 0;
        this.maxNum = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }    

    guess() {
        this.result = Math.round(this.minNum + (this.maxNum - this.minNum)/2);
        return this.result;
    }

    lower() {
        this.maxNum = this.result;
    }

    greater() {
        this.minNum = this.result;
    }
}


module.exports = GuessingGame;
