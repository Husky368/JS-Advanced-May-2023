class Circle{
    constructor(inputRad) {
        this._radius = inputRad;
    }
    get radius(){
        return this._radius
    }
    get diameter(){
        return this._radius*2
    }
    get area(){
        return Math.PI*this._radius**2
    }
    set diameter(input){
        return this._radius = input/2;
    }
}
