function extractText() {
    let lis = document.getElementsByTagName('li');
    let arrayLis = Array.from(lis);
    let arrayText = arrayLis.map(x => x.textContent);

    let textArea = document.getElementById('result');
    textArea.value = arrayText.join('\n');
}
