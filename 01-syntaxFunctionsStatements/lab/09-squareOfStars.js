function squareOfStars(input) {
    let countStars = 5;
    if (input != undefined) {
        countStars = input
    }
    for (let index = 0; index < countStars; index++) {
        console.log('* '.repeat(countStars))
    }
} squareOfStars(6)
