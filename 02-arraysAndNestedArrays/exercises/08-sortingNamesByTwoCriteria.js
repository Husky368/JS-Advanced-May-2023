function sortingNamesByTwoCriteria(arr) {
    arr.sort((a,b) => a.length- b.length)
    console.log(arr.join('\n'))
}
