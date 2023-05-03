function rotateArr(arr, num) {
    for (let index = 1; index <= num; index++) {
        let number = arr.pop();
        arr.unshift(number);
    }
    console.log(arr.join(' '));
} rotateArr(
    ['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)
