function calorieObj(array){
    let obj = {};
    for (let index = 0; index < array.length; index+=2) {
        obj[array[index]] = Number(array[index+1])
    }
    console.log(obj)
}calorieObj(['Yoghurt', '48', 'Rise', '138', 
'Apple', '52'] 
)
