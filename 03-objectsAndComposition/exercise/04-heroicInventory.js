function heroicInventory(input){
    let resultArr = [];
    for (let el of input) {
        let [name,levelInfo,items] = el.split(' / ');
        items = items.split(', ')
        let obj = {
            name: name,
            level: Number(levelInfo),
            items : items
        };
        resultArr.push(obj)
    }
    return JSON.stringify(resultArr);
}
