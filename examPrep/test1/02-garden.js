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
            [_plantName]: {
                plantName: _plantName,
                spaceRequired: _spaceRequired,
                ripe: false,
                quantity: 0,
            }
        })
        this.spaceAvailable -= _spaceRequired;
        return `The ${_plantName} has been successfully planted in the garden.`
    }
    ripenPlant(_plantName, _quantity) {
        let plantInGarden = false;
        for (const obj of this.plants) {
            if (obj.hasOwnProperty(_plantName)) {
                plantInGarden = true;
                break;
            }
        }
        if (!plantInGarden) {
            throw new Error(`There is no ${_plantName} in the garden.`)
        }
        for (const obj of this.plants) {
            if (obj.hasOwnProperty(_plantName)) {
                let innerObj = obj[_plantName];
                let ripeInfo = innerObj.ripe
                if (ripeInfo) {
                    throw new Error(`The ${_plantName} is already ripe.`);
                }
                break;
            }
        }
        if (_quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        for (const obj of this.plants) {
            if (obj.hasOwnProperty(_plantName)) {
                let objValues = obj[_plantName];
                objValues.quantity += _quantity;
                objValues.ripe = true;
                this.plants.map((a) => {
                    if (a.hasOwnProperty(_plantName)) {
                        this[a] = objValues;
                    }
                })
                break;
            }
        }
        if (_quantity == 1) {
            return `${_quantity} ${_plantName} has successfully ripened.`;
        } else {
            return `${_quantity} ${_plantName}s have successfully ripened.`
        }
    }
    harvestPlant(_plantName) {
        let plantInGarden = false;
        for (const obj of this.plants) {
            if (obj.hasOwnProperty(_plantName)) {
                plantInGarden = true;
                break;
            }
        }
        if (!plantInGarden) {
            throw new Error(`There is no ${_plantName} in the garden.`)
        }
        let findIndex = 0;
        for (let index = 0; index < this.plants.length; index++) {
            if (this.plants[index].hasOwnProperty(_plantName)) {
                findIndex = index;
                let innerObj = this.plants[index][_plantName];
                if (innerObj.ripe === false) {
                    throw new Error(`The ${_plantName} cannot be harvested before it is ripe.`)
                }
                break;
            }
        }
        let harvestedArr = this.plants[findIndex];
        let getSpace = harvestedArr[_plantName].spaceRequired;
        this.spaceAvailable += getSpace;
        this.plants.splice(findIndex, 1);
        delete harvestedArr[_plantName].ripe;
        delete harvestedArr[_plantName].spaceRequired;
        this.storage.push(harvestedArr[_plantName]);
        return `The ${_plantName} has been successfully harvested.`
    }
    generateReport() {
        let fLine = `The garden has ${this.spaceAvailable} free space left.`;
        let result = [fLine];
        this.plants.sort((a, b) => {
            const keyA = Object.keys(a)[0];
            const keyB = Object.keys(b)[0];
            return keyA.localeCompare(keyB);
        })
        let plantsInGardenText = "Plants in the garden: ";
        this.plants.map((a) => {
            let key = Object.keys(a)
            plantsInGardenText += `${key}, `
        })
        plantsInGardenText = plantsInGardenText.slice(0, plantsInGardenText.length - 2);
        result.push(plantsInGardenText)
        if (this.storage.length == 0) {
            console.log(`Plants in storage: The storage is empty.`);
        }
        else {
            let plantsInStorageText = "Plants in storage: ";
            for (let obj of this.storage) {
                let storageValues = Object.values(obj)
                plantsInStorageText += `${storageValues[0]} (${storageValues[1]}), `;
            }
            plantsInStorageText = plantsInStorageText.slice(0, plantsInStorageText.length - 2);
            result.push(plantsInStorageText)
            return result.join('\n')
        }
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant("apple", 20))
console.log(myGarden.addPlant("orange", 200))
console.log(myGarden.addPlant("raspberry", 10))
console.log(myGarden.ripenPlant("apple", 10))
console.log(myGarden.ripenPlant("orange", 1))
console.log(myGarden.harvestPlant("orange"))
console.log(myGarden.generateReport())
