function increasingSubset(arr) {
    let biggestNum = arr[0];
    let resArr = [biggestNum];
    for (const iterator of arr) {
        if (iterator > biggestNum) {
            biggestNum = iterator;
            resArr.push(biggestNum)
       }
    }
    return resArr
}
