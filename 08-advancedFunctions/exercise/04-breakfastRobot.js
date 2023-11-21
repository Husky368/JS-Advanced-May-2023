function solution() {
    let stockObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let notEnoughCarb = 'Error: not enough carbohydrate in stock';
    let notEnoughProtein = 'Error: not enough protein in stock';
    let notEnoughFat = 'Error: not enough fat in stock';
    let notEnoughFlavour = 'Error: not enough flavour in stock';
    let successText = 'Success';
    return function manager(task) {
        let taskArr = task.split(' ');
        let command = taskArr[0];
        let typeFood = taskArr[1];
        let quantity = taskArr[2];
        if (command == 'restock') {
            stockObj[typeFood] += Number(quantity);
            return successText
        }
        else if (command == 'prepare') {
            switch (typeFood) {
                case 'apple':
                    // apple - made with 1 carbohydrate and 2 flavour
                    let appleTotalCarbohydratesNeed = 1 * quantity;
                    let appleTotalflavoursNeed = 2 * quantity;
                    if (stockObj.carbohydrate < appleTotalCarbohydratesNeed) {
                        return notEnoughCarb
                    }
                    else if (stockObj.flavour < appleTotalflavoursNeed) {
                        return notEnoughFlavour
                    }
                    else {
                        stockObj.carbohydrate -= appleTotalCarbohydratesNeed;
                        stockObj.flavour -= appleTotalflavoursNeed;
                        return successText
                    }
                    break;
                case 'lemonade':
                    // lemonade - made with 10 carbohydrate and 20 flavour
                    let lemonadeTotalCarbohydratesNeed = 10 * quantity;
                    let lemonadeTotalflavoursNeed = 20 * quantity;
                    if (stockObj.carbohydrate < lemonadeTotalCarbohydratesNeed) {
                        return notEnoughCarb
                    }
                    else if (stockObj.flavour < lemonadeTotalflavoursNeed) {
                        return notEnoughFlavour
                    }
                    else {
                        stockObj.carbohydrate -= lemonadeTotalCarbohydratesNeed;
                        stockObj.flavour -= lemonadeTotalflavoursNeed;
                        return successText
                    }
                    break;
                case 'burger':
                    // burger - made with 5 carbohydrate, 7 fat and 3 flavour
                    let burgerTotalCarbohydratesNeed = 5 * quantity;
                    let burgerTotalFatNeed = 7 * quantity;
                    let burgerTotalflavoursNeed = 3 * quantity;
                    if (stockObj.carbohydrate < burgerTotalCarbohydratesNeed) {
                        return notEnoughCarb
                    }
                    else if (stockObj.fat < burgerTotalFatNeed) {
                        return notEnoughFat
                    }
                    else if (stockObj.flavour < burgerTotalflavoursNeed) {
                        return notEnoughFlavour
                    }
                    else {
                        stockObj.carbohydrate -= burgerTotalCarbohydratesNeed;
                        stockObj.fat -= burgerTotalFatNeed;
                        stockObj.flavour -= burgerTotalflavoursNeed;
                        return successText
                    }
                    break;
                case 'eggs':
                    // eggs - made with 5 protein, 1 fat and 1 flavour
                    let eggsTotalProteinNeed = 5 * quantity;
                    let eggsTotalFatNeed = 1 * quantity;
                    let eggsTotalflavoursNeed = 1 * quantity;
                    if (stockObj.protein < eggsTotalProteinNeed) {
                        return notEnoughProtein
                    }
                    else if (stockObj.fat < eggsTotalFatNeed) {
                        return notEnoughFat
                    }
                    else if (stockObj.flavour < eggsTotalflavoursNeed) {
                        return notEnoughFlavour
                    }
                    else {
                        stockObj.protein -= eggsTotalProteinNeed;
                        stockObj.fat -= eggsTotalFatNeed;
                        stockObj.flavour -= eggsTotalflavoursNeed;
                        return successText
                    }
                    break;
                case 'turkey':
                    // turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
                    let turkeyTotalProteinNeed = 10 * quantity;
                    let turkeyTotalCarbsNeed = 10 * quantity;
                    let turkeyTotalFatNeed = 10 * quantity;
                    let turkeyTotalFlavoursNeed = 10 * quantity;
                    if (stockObj.protein < turkeyTotalProteinNeed) {
                        return notEnoughProtein
                    }
                    else if (stockObj.carbohydrate < turkeyTotalCarbsNeed) {
                        return notEnoughCarb
                    }
                    else if (stockObj.fat < turkeyTotalFatNeed) {
                        return notEnoughFat
                    }
                    else if (stockObj.flavour < turkeyTotalFlavoursNeed) {
                        return notEnoughFlavour
                    }
                    else {
                        stockObj.protein -= turkeyTotalProteinNeed;
                        stockObj.carbohydrate -= turkeyTotalCarbsNeed;
                        stockObj.fat -= turkeyTotalFatNeed;
                        stockObj.flavour -= turkeyTotalFlavoursNeed;
                        return successText
                    }
                    break;
                default:
                    break;
            }
        }
        else {
            let pringString = "";
            Object.entries(stockObj).forEach(function ([key, value]) {
                pringString += `${key}=${value} `;
            })
            pringString = pringString.slice(0,pringString.length-1)
            return pringString
        }
    }
}
