function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;

    let selectMenu = document.getElementById('menu');
    selectMenu.appendChild(newOption);
    textInput.value = '';
    valueInput.value = '';
}
