function lowestPricesInCity(input) {
    let resultObj = {};
    for (const line of input) {
        let [name,product,price] = line.split(' | ');
        if(!resultObj[product]){
            resultObj[product] = {};
        }
        resultObj[product][name] = Number(price);
    }   
    for (let [product,town] of Object.entries(resultObj)) {
        let sorted = Object.entries(town)
        sorted = sorted.sort((a,b) => a[1]-b[1]);
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}
