class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.manipulateLength = this.innerLength
    }

    updateLength() {
        if (this.manipulateLength < 0) {
            this.manipulateLength = 0;
        }
    }
    increase(incProp) {
        this.manipulateLength += incProp;
        this.updateLength();
    }

    decrease(decProp) {
        this.manipulateLength -= decProp;
        this.updateLength();
    }
    toString() {
        if (this.manipulateLength == 0) {
            return '...'
        }
        if (this.innerString.length <= this.manipulateLength) {
            return this.innerString
        }
        else if(this.innerString.length > this.manipulateLength) {
            this.innerString = this.innerString.slice(0, this.manipulateLength).concat("...")
            return this.innerString
        }
    }
}
