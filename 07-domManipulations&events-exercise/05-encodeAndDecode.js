function encodeAndDecodeMessages() {
    let btnArr = document.querySelectorAll('button');
    let textareaArr = document.querySelectorAll('textarea');
    btnArr[0].addEventListener('click', encodeHandler);
    btnArr[1].addEventListener('click', decodeHandler);
    
    function encodeHandler(e){
        let text = textareaArr[0].value;
        let encodedText = '';
        for (let index = 0; index < text.length; index++) {
            let letterAt = text.charCodeAt(index);
            encodedText += String.fromCharCode(letterAt+1);
        }
        textareaArr[1].value = encodedText;
        textareaArr[0].value = '';
    }
    function decodeHandler(){
        let text = textareaArr[1].value;
        let decodedText = '';
        for (let index = 0; index < text.length; index++) {
            let letterAt = text.charCodeAt(index);
            decodedText += String.fromCharCode(letterAt-1);
        }
        textareaArr[1].value = decodedText;
    }
}
