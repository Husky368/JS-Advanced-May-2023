window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishHandler)
  function publishHandler(e) {
    let fieldSetEl = e.target.parentNode;
    let makeFieldEl = fieldSetEl.querySelector('#make');
    let modelFieldEl = fieldSetEl.querySelector('#model');
    let yearFieldEl = fieldSetEl.querySelector('#year');
    let fuelFieldEl = fieldSetEl.querySelector('#fuel');
    let originalCostFieldEl = fieldSetEl.querySelector('#original-cost');
    let sellingPriceFieldEl = fieldSetEl.querySelector('#selling-price');

    let tableRowEl = document.getElementById('table-body');
    let trNewEl = document.createElement('tr');
    trNewEl.classList.add('row');

    let makeNewEl = document.createElement('td');
    makeNewEl.textContent = makeFieldEl.textContent;
    trNewEl.appendChild(makeNewEl);

    let modelNewEl = document.createElement('td');
    modelNewEl.textContent = modelFieldEl.textContent;
    trNewEl.appendChild(modelNewEl);

    let yearNewEl = document.createElement('td');
    yearNewEl.textContent = yearFieldEl.textContent;
    trNewEl.appendChild(yearNewEl);

    let fuelNewEl = document.createElement('td');
    fuelNewEl.textContent = fuelFieldEl.textContent;
    trNewEl.appendChild(fuelNewEl);

    let priceNewEl = document.createElement('td');
    priceNewEl.textContent = originalCostFieldEl.textContent;
    trNewEl.appendChild(priceNewEl);

    let newPriceNewEl = document.createElement('td');
    newPriceNewEl.textContent = sellingPriceFieldEl.textContent;
    trNewEl.appendChild(newPriceNewEl);

    let buttonsNewEl = document.createElement('td');

    let editBtnEl = document.createElement('button');
    editBtnEl.classList.add('action-btn', 'edit');
    buttonsNewEl.appendChild(editBtnEl);
    let sellBtnEl = document.createElement('button');
    sellBtnEl.classList.add('action-btn', 'sell');
    buttonsNewEl.appendChild(sellBtnEl);
    trNewEl.appendChild(buttonsNewEl);

    tableRowEl.appendChild(trNewEl)
  }

}
