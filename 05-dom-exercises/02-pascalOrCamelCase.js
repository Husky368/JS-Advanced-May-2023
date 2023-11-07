function solve() {
  //TODO...ASD
  let inputOne = document.getElementById('text');
  let inputTwo = document.getElementById('naming-convention');
  let inputThree = document.getElementById('result');

  let resText = inputOne.value;
  let resCase = inputTwo.value;
  let result = inputThree.value;

  if (resCase == 'Camel Case') {
    let arrWords = resText.split(' ');
    let correctWord = '';
    correctWord += arrWords[0].toLowerCase();
    for (let index = 1; index < arrWords.length; index++) {
      correctWord += arrWords[index][0].toUpperCase() + arrWords[index].substring(1).toLowerCase();
    }
    return inputThree.textContent = correctWord;
  }
  else if (resCase == 'Pascal Case') {
    let arrWords = resText.split(' ');
    let correctWord = '';
    for (let index = 0; index < arrWords.length; index++) {
      correctWord += arrWords[index][0].toUpperCase() + arrWords[index].substring(1).toLowerCase();
    }
    return inputThree.textContent = correctWord;
  }
  else {
    return inputThree.textContent = 'Error!'
  }
}
