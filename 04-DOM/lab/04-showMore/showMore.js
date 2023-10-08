function showText() {
    // TODO
    let span = document.querySelector('#more');
    let anchor = document.querySelector('#text');

    span.text = "";
    let text = anchor.textContent;
    span.textContent = text
}
