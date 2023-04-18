function smallestTwoNums(arr){
    arr = arr.sort((a,b) => a-b)
    arr = arr.splice(0,2)
    console.log(arr.join(' '))
}smallestTwoNums([30, 15, 50, 5])
