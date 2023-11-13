function lockedProfile() {
    let showMoreBtnArr = Array.from(document.querySelectorAll('div.profile button'));

    for (const btn of showMoreBtnArr) {
        btn.addEventListener('click', onclickHandler)
    }

    function onclickHandler(e){
        let parent = e.target.parentNode;
        let unlocked = parent.children[4].checked;

        if(!unlocked){
            return;
        }
        else if(unlocked&&parent.children[10].textContent=='Show more'){
            parent.children[9].style.display = 'inline';
            parent.children[10].textContent = 'Hide it';
        }
        else{
            parent.children[9].style.display = 'none';
            parent.children[10].textContent = 'Show more';
        }
    }
}
