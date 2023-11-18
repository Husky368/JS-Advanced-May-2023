function listProcessor(arr) {
    let string = [];
    for (let line of arr) {
        [command, word] = line.split(' ');
        if (command == 'add') {
            string.push(word)
        }
        else if (command == 'remove'){
            let arr = [];
            for (const index of string) {
                if(index!=word){
                    arr.push(index)
                }
            }
            string = arr;
        }
        else{
            console.log(string.join(','))
        }
    }
}
