function dayInMonth(month,year){
    switch (month) {
        case '1': return console.log('31');
        case '2': return console.log('28');
        case '3': return console.log('31');
        case '4': return console.log('30');
        case '5': return console.log('31');
        case '6': return console.log('30');
        case '7': return console.log('31');
        case '8': return console.log('30');
        case '9': return console.log('31');
        case '10': return console.log('30');
        case '11': return console.log('31');
        case '12': return console.log('30');
        default: return console.log('error')
    }
}dayInMonth(1, 2012)
