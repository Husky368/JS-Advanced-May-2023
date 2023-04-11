function circleArea(input) {
    let type = typeof input
    let result;
    if (type == 'number') {
        result = Math.pow(input, 2) * Math.PI
        return console.log(result.toFixed(2))
    }
    console.log(`We can not calculate the circle area, because we receive a ${type}.`)

} circleArea(5)
