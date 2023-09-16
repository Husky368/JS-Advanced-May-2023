function sortingNamesByTwoCriteria(arr) {
    arr.sort((a, b) => {
        let comparising = a.length - b.length
        if (comparising === 0) {
            return a.localeCompare(b);
        }
        return comparising
    })
    console.log(arr.join('\n'))
}
