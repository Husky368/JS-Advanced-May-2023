function solve(area, vol, input) {
    let resultArr = [];
    let objects = JSON.parse(input);
    for (const obj of objects) {
        let areaValue = area.call(obj);
        let volumeValue = vol.call(obj);
        let curObj = {area: areaValue, volume: volumeValue};
        resultArr.push(curObj);
    }
    return resultArr
}   
