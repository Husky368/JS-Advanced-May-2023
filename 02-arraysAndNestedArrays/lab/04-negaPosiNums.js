function negaPosiNums(arr) {
    let resArr = [];
    for (const iterator of arr) {
        if (iterator < 0) {
            resArr.unshift(iterator)
        }
        else {
            resArr.push(iterator)
        }
    }
    console.log(resArr.join('\n'))
} 
