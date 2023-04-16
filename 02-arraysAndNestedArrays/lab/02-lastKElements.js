function lastKElements(n, k) {
    let array = [1];
    for (let index = 2; index <= n; index++) {
        if (index >= k) {
            let newDigit = 0
            let innerIndex = index - k;
            for (let inner = innerIndex; inner <= array.length; inner++) {
                if(inner!=array.length){
                    let newDigit += array[inner];
                }
            }
            array.push(newDigit)
        }
        else {
            array.push(1)
        }
        console.log(array)
    }
} lastKElements(6, 3)
