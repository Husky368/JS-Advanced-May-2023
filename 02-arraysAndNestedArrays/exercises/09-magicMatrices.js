function magicMatrices(array) {
    let numCols = array[0].length;
    let numRows = array.length;
    let firstExample = 0;
    
    for (let index = 0; index < numRows; index++) {
        firstExample += array[0][index];
    }
    
    for (let index = 0; index < numRows; index++) {
        let sum = 0;
        for (let innerIndex = 0; innerIndex < numCols; innerIndex++) {
            sum += array[index][innerIndex];
        }
        if (sum !== firstExample) {
            return false;
        }
    }
    
    for (let index = 0; index < numCols; index++) {
        let sum = 0;
        for (let innerIndex = 0; innerIndex < numRows; innerIndex++) {
            sum += array[innerIndex][index];
        }
        if (sum !== firstExample) {
            return false;
        }
    }
    
    return true;
}
