function subtract() {
    let inputOne = document.getElementById('firstNumber');
    let inputTwo = document.getElementById('secondNumber');
    let result = document.getElementById('result');

    let number1 = Number(inputOne.value);
    let number2 = Number(inputTwo.value);
    result.textContent = number1 - number2;
}
