function playingCards(faceInput, suitInput) {
    let errorText = 'Error';
    let facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K', 'A'];
    let suitsArr = ["S", "H", "D", "C"];

    if( !facesArr.includes(faceInput)){
        return errorText.toString();
    }
    if (suitInput == 'S') {
        let result = `${faceInput}\u2660`;
        return result.toString()
    }
    else if (suitInput == 'H') {
        let result = `${faceInput}\u2665`;
        return result.toString()
    }
    else if (suitInput == 'D') {
        let result = `${faceInput}\u2666`;
        return result.toString()
    }
    else if (suitInput == 'D') {
        let result = `${faceInput}\u2663`;
        return result.toString()
    }
}
