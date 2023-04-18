function proccessOddPoss(arr) {
    let resArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 1) {
            resArr.push(arr[index]*2)
        }
    }
    return resArr.reverse().join(' ');
} proccessOddPoss([3, 0, 10, 4, 7, 3])
