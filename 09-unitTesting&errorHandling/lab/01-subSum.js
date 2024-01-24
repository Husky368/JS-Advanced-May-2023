// Write a function to sum a range of numeric elements from an array.
// The function takes three parameters - the first is an array, the second is the start index and the third is the end
// index. Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast
// everything. Implement the following error handling:
//  If the first element is not an array, return NaN
//  If the start index is less than zero, consider its value to be a zero
//  If the end index is outside the bounds of the array, assume it points to the last index of the array
// Input / Output[10, 20, 30, 40, 50, 60], 3, 300
// Your function must take three parameters. As output, return the sum.
function subSum(inputArr, inputStart, inputEnd) {
    if (Array.isArray(inputArr) === false) {
        return NaN
    }
    if (inputStart < 0) {
        inputStart = 0;
    }
    if (inputEnd > inputArr.length - 1) {
        inputEnd = inputArr.length - 1;
    }
    let result = 0;
    let isAllNumber = inputArr.some((a) => typeof a == Number)
    if(!isAllNumber){
        return NaN
    }
    for (let index = inputStart; index <= inputEnd; index++) {
        result += inputArr[index]
    }
    return result
}
let a = subSum([], 1, 2)
console.log(a)
