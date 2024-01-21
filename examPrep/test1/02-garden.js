class Garden {
    constructor(inputAvalableSpace) {
        this.spaceAvailable = inputAvalableSpace;
        this.plants = [];
        this.storage = [];
    }
    addPlant(_plantName, _spaceRequired) {
        if (this.spaceAvailable < _spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({
            plantName: _plantName,
            spaceRequired: _spaceRequired,
            ripe: false,
            quantity: 0,
        })
        this.spaceAvailable -= _spaceRequired;
        return `The ${_plantName} has been successfully planted in the garden.`
    }
    // •	If the received quantity is less than or equal to 0, throw an Error:
    // "The quantity cannot be zero or negative."
    // •	Otherwise, this function should set the ripe property of the particular plant to true and add the quantity to the quantity property of the plant. If the quantity passed as a parameter is 1, return:
    // "{quantity} {plantName} has successfully ripened."
    // If the quantity parameter is greater than 1, return:
    // "{quantity} {plantName}s have successfully ripened."
    ripenPlant(_plantName, _quantity) {
        // •	If the plant is not found, throw an Error:
        // "There is no {plantName} in the garden."
        let plantInGarden = this.plants.some(obj => Object.values(obj).includes(_plantName));
        if (!plantInGarden) {
            throw new Error(`There is no ${_plantName} in the garden.`)
        }
        // •	If the plant is already ripe, throw an Error:
        // "The {plantName} is already ripe."
        let ripenPlantCheck = this.plants.some(obj => obj[_plantName] == true);
        if (ripenPlantCheck) {
            throw new Error(`The ${_plantName} is already ripe.`)
        }
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
myGarden.plants[0][this.ripe] = true;
// asd[ripe] = true;
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
