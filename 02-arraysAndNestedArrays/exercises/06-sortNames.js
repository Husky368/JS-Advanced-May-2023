function sortNames(arr) {
    if(arr.lenth>0){
        let resArr = arr.sort((a, b) => a[0].localeCompare(b[0]));
    }
    for (let index = 0; index < arr.length; index++) {
        console.log(index + 1 + '.' + resArr[index])
    }
}
