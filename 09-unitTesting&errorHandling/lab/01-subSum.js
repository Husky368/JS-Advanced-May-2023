function subSum(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN
    }
    for (const el of array) {
        let elType = typeof(el);
        if(elType!='number'){
            return NaN
        }
    }
    if (start < 0) {
        start = 0
    }
    if (end > array.length - 1) {
        end = array.length - 1
    }
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += array[index]
    }
    return sum
}
