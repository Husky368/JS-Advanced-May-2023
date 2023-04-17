function lastKElements(n, k) {
    let array = [1]
    for (let index = 2; index <= n; index++) {
        if (index >= k) {
            let newDigit = 0
            if (array.length > k) {
                let innerIndex = array.length - k;
                for (let inner = innerIndex; inner < array.length; inner++) {
                    newDigit += array[inner];
                }
            }
            else {
                for (let totalIndex = 0; totalIndex < array.length; totalIndex++) {
                    newDigit += array[totalIndex];
                }
            }
            array.push(newDigit)
        }
        else {
            array.push(1)
        }
    }
    return array
} lastKElements(20,10)
