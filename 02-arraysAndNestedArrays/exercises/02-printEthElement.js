function printEthElement(arr, step) {
    let resultArr = [];
    for (let index = 0; index < arr.length; index += step) {
        resultArr.push(arr[index])
    }
    return resultArr
} printEthElement(['1',
'2',
'3',
'4',
'5'],
6
)
