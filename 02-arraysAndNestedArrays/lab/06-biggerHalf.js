function biggerHalf(arr){
    arr.sort((a,b) => a-b);
    let halfCount = Math.ceil(arr.length/2);
    return arr = arr.reverse().splice(0,halfCount).reverse();
}biggerHalf([3, 19, 14, 7, 2, 19, 6])
