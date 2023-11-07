function toggle() {
    let buttonTitle = document.getElementsByClassName('button');
    let pDetails = document.getElementById('extra');

    if (buttonTitle[0].textContent == 'More') {
        buttonTitle[0].textContent = 'Less'
        pDetails.style.display = 'block';
    }

    else if(buttonTitle[0].textContent == 'Less') {
        buttonTitle[0].textContent = 'More'
        pDetails.style.display = 'none';
    }
}
