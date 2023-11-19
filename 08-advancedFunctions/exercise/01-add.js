function solution(sortArr, sortOrder) {
    if (sortOrder == 'asc') {
        return sortAsc(sortArr)
    }
    return sortDec(sortArr)
    function sortAsc(arr) {
        arr = arr.sort((a,b) => a - b)
        return arr
    }
    function sortDec(arr){
        arr = arr.sort((a,b)=>b-a);
        return arr
    }
}
