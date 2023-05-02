function addAndRemove(arr) {
    let resArr = [];
    let addExist = false;
    let number = 0;
    for (const el of arr) {
        number++;
        if (el == 'add') {
            addExist = true;
            resArr.push(number);
        }
        else if (el == 'remove') {
            resArr.pop();
        }
    }
    if (!addExist || resArr.length == 0) {
        console.log('Empty');
    }
    else {
        return console.log(resArr.join('\n'))
    }
}
