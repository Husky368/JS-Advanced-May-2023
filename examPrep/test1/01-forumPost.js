function solve() {
  let titleElement = document.getElementById('post-title');
  let categoryElement = document.getElementById('post-category');
  let contentElement = document.getElementById('post-content');
  let reviewListElement = document.getElementById('review-list');
  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publishHandler);
  let clearBtnElement = document.getElementById('clear-btn');
  clearBtnElement.addEventListener('click', clearHandler)
  let publishListElement = document.getElementById('published-list');

  function publishHandler(e) {
    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;
    if (title === '' || category === '' || content == '') {
      return
    }
    category = `Category: ${categoryElement.value}`;
    content = `Content: ${contentElement.value}`;


    let liElement = document.createElement('li');
    liElement.classList.add('rpost');
    let articleElement = document.createElement('article');
    let h4Element = document.createElement('h4');
    let pCategory = document.createElement('p');
    let pContent = document.createElement('p');

    let editButtonEl = document.createElement('button');
    editButtonEl.classList.add('action-btn', 'edit');
    editButtonEl.textContent = 'EDIT';
    editButtonEl.addEventListener('click', editHandler)

    let approveButtonEl = document.createElement('button');
    approveButtonEl.classList.add('action-btn', 'approve');
    approveButtonEl.textContent = 'APPROVE';
    approveButtonEl.addEventListener('click', approvedHandler)

    h4Element.textContent = title;
    pCategory.textContent = category;
    pContent.textContent = content;

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pCategory);
    articleElement.appendChild(pContent);
    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonEl);
    liElement.appendChild(approveButtonEl);
    reviewListElement.appendChild(liElement);

    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';
    return reviewListElement
  }
  function editHandler(e) {
    let parentEl = e.target.parentElement;
    let articleEl = parentEl.querySelector('article');
    let titleEl = articleEl.querySelector('h4');
    let pArr = articleEl.querySelectorAll('p');

    titleElement.value = titleEl.textContent;
    contentElement.value = pArr[0].textContent.substring(10);
    categoryElement.value = pArr[1].textContent.substring(9);
    parentEl.remove();
  }
  function approvedHandler(e) {
    let approveParentLiEL = e.target.parentElement;
    
    let btnsArr = approveParentLiEL.querySelectorAll('button');
    approveParentLiEL.removeChild(btnsArr[0]);
    approveParentLiEL.removeChild(btnsArr[1]);
    approveParentLiEL.remove();
    publishListElement.appendChild(approveParentLiEL);
  }
  function clearHandler(e) {
    let publishChildren = publishListElement.querySelectorAll('li');
  
    // Iterate in reverse order to avoid issues with changing indices during removal
    for (let index = publishChildren.length - 1; index >= 0; index--) {
      publishListElement.removeChild(publishChildren[index]);
    }
  }
}
