function solve() {
    let buttonInput = document.getElementById('searchBtn');
    buttonInput.addEventListener('click', onclick);
    let rows = document.querySelectorAll('tbody tr');

    function onclick() {
        let inputSearchLowerCased = document.getElementById('searchField').value.toLowerCase();

        for (let row of rows) {
            let rowValueLowerCased = row.textContent.toLowerCase();

            if(rowValueLowerCased.includes(inputSearchLowerCased)){
                row.setAttribute('class', 'select');
            }
            else{
                row.removeAttribute('class');
            }
        }

    }
}
