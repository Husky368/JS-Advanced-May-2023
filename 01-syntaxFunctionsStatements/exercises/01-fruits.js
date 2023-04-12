function fruit(fruit,weight,price){
    weight = weight/1000;
    let money = price*weight;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
    //`I need ${money} to buy {weight} kilograms {fruit}.`
}fruit('apple', 1563, 2.35)
