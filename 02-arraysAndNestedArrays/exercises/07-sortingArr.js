function sortingArr(arr) {
    let bigArr = arr.sort((a, b) => b - a);
    let resultArr = [];
    let arrLength = arr.length;
    for (let index = 1; index <= arrLength; index+=2) {
        let small = bigArr.pop();
        let big  = bigArr.shift();
        resultArr.push(small,big)
    }
    return resultArr
}
