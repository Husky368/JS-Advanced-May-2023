function diagonalSums(arr) {
    let sumsArr = [];
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let digit = arr[index][index];
        sum += digit;
    }
    sumsArr.push(sum);
    sum = 0;
    let count = arr.length-1;
    for (let index = 0; index < arr.length; index++) {
        let digit = arr[index][count];
        sum += digit;
        count--;
    }
    sumsArr.push(sum);
    console.log(sumsArr.join(' '))
}
