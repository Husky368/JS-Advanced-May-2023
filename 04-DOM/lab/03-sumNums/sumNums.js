function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let infoSum = document.getElementById('sum')
    let a = Number(firstNum.value)
    let b = Number(secondNum.value)
    infoSum.value = a+b;
}
