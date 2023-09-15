function biggestEl(arr){
    let resArr = [];
    for (let index = 0; index < arr.length; index++) {
        for (let innerindex = 0; innerindex < arr[index].length; innerindex++) {
            resArr.push(arr[index][innerindex])
        }
    }
    resArr = resArr.sort((a,b) => b-a)
    return resArr[0]
}
