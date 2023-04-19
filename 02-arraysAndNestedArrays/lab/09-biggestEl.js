function biggestEl(arr) {
    let biggest = arr[0][0];
    for (let index = 0; index < arr.length; index++) {
        for (let innerIndex = 0; innerIndex < arr[index].length; innerIndex++) {
            if (arr[index][innerIndex] > biggest) {
                biggest = arr[index][innerIndex];
            }
        }
    }
    return biggest
}
