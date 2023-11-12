function create(words) {
   let mainContainer = document.getElementById('content');

   for (let word of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';
      newDiv.appendChild(newP);
      mainContainer.appendChild(newDiv);

      newDiv.addEventListener('click', visiblityHandler);
   }
   function visiblityHandler(e){
      e.currentTarget.children[0].style.display = 'Block';
   }
}
