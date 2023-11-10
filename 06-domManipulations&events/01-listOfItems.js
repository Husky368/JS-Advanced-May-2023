function addItem() {
    let newText = document.getElementById('newItemText').value;
    let elementParent = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = newText;
    elementParent.appendChild(newLi);
}
