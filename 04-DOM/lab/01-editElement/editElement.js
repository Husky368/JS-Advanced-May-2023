function editElement(ref,match,replace) {
    // TODO
    let text = ref.textContent;
    let regex = new RegExp(match,'g');
    let res = text.replace(regex,replace);
    ref.textContent = res;
}
