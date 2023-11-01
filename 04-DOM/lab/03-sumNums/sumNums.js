function calc() {
    // TODO: sum = num1 + num2
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let sum = document.getElementById('sum');

    let numberOne = Number(firstNum.value);
    let numberTwo = Number(secondNum.value);
    sum.value = numberOne+numberTwo;
}
