function pieceOfCake(arr, first, second) {
    let resArr = [];
    let inside = false;
    for (let line of arr) {
        if (line == first) {
            inside = true;
        }
        if (inside) {
            resArr.push(line);
        }
        if (line == second) {
            break;
        }
    }
    return console.log(resArr)
} pieceOfCake(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

)
