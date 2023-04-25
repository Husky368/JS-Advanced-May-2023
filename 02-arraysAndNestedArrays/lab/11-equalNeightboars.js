function equalNeightboars(arr) {
    let pairs = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let innerIndex = 0; innerIndex < arr[index].length; innerIndex++) {
            if (index != arr.length - 1 && arr[index][innerIndex] == arr[index + 1][innerIndex]) {
                pairs++
            }
            if (arr[index][innerIndex] == arr[index][innerIndex - 1]) {
                pairs++
            }
        }
    }
    return console.log(pairs)
} 
