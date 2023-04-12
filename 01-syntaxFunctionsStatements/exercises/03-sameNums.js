function sameNums(input) {
    let number = input.toString()
    let sameNumbers = true;
    number = number.split('');
    let firstNum = Number(number.shift());
    let sum = number.reduce(Number(a) => a += a)
    for (let digit of number) {
        digit = Number(digit)
        if (digit != firstNum) {
            sameNumbers = false;
            break;
        }
        sum += digit
    }
    console.log(sameNumbers)
    return console.log(sum)
} sameNums(1234)
