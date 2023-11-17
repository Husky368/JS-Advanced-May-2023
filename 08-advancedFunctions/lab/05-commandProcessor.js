function solution() {
    let internalString = '';
    let obj = {
        append(str) {
            internalString += str
        },
        removeStart(n) {
            internalString = internalString.slice(n)
        },
        removeEnd(n) {
            internalString = internalString.slice(0, internalString.length - n)
        },
        print(){
            console.log(internalString);
        }
    };
    return obj
}
