function addItem() {
    let ul = document.getElementById('items');
    let newItemText = document.getElementById('newItemText').value;

    let newLi = document.createElement('li')
    newLi.textContent = newItemText;

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', deleteHandeler);
    newLi.appendChild(deleteLink);
    ul.appendChild(newLi);
    
    function deleteHandeler(e){
        let link = e.target;
        let li = link.parentElement;
        li.remove();
    }
}
