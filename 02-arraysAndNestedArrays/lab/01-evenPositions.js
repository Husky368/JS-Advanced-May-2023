function evenPositions(arr) {
    let resArr = []
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
        resArr.push(arr[index])
        }
    }
    console.log(resArr.join(' '))
} evenPositions(['20', '30', '40', '50', '60'])
