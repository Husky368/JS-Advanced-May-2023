function townPopulation(input) {
    let objectInfo = {};
    let array = [];
    for (let info of input) {
        [city, population] = info.split(" <-> ");
        if (!array.includes(city)) {
            array.push(city);
            objectInfo[city] = Number(population);
        }
        else{
            objectInfo[city] += Number(population);
        }
    }
    for (const key in objectInfo) {
        console.log(`${key} : ${objectInfo[key]}`);
    }
}
