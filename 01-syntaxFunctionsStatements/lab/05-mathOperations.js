function mathOperations(first, second, operation) {
    switch (operation) {
        case '+':
            console.log(first + second)
            break;
        case '-':
            console.log(first - second)
            break;
        case '*':
            console.log(first * second)
            break;
        case '/':
            console.log(first / second)
            break;
        case '%':
            console.log(first % second)
            break;
        case '**':
            console.log(Math.pow(first, second))
            break;
    }
} mathOperations(10, 3, '%')
