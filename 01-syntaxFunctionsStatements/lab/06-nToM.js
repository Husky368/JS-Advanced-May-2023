function nToM(f, s) {
    let first = Number(f);
    let second = Number(s);
    let result = 0;
    for (let index = first; index <= second; index++) {
        result +=  index
    }
    console.log(result)
} nToM('-8', '20')
