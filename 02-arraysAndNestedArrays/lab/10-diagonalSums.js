function diagonalSum(array) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let i = 0;
    for (let index = 0; index < array.length; index++) {
        firstDiagonal += array[index][i]
        i++;
    }
    i = array.length - 1;
    for (let index = 0; index < array.length; index++) {
        secondDiagonal += array[index][i];
        i--;
    }
    console.log(firstDiagonal + ' ' + secondDiagonal)
}
