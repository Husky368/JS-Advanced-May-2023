function solution(...args) {
    let obj = {};

    for (let arg of args) {
        let typeOfArg = typeof arg;

        obj[typeOfArg] = obj[typeOfArg] 
        ? (obj[typeOfArg] += Number(1)) 
        : (obj[typeOfArg] = Number(1))
        console.log(`${typeOfArg}: ${arg}`)
    }
    let sortedObj = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    sortedObj.forEach(([key,value]) => {
        console.log(`${key} = ${value}`)
    });
}
