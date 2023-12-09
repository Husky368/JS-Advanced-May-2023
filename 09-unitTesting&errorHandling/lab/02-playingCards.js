function playingCards(faceInput, suitInput) {
    let errorText = 'Error';
    let facesArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let suitsArr = ["S", "H", "D", "C"];
    if (!facesArr.includes(faceInput)) {
        return errorText;
    }
    if (suitInput == 'S') {
        let result = `${faceInput}\u2660`;
        return result
    }
    else if (suitInput == 'H') {
        let result = `${faceInput}\u2665`;
        return result
    }
    else if (suitInput == 'D') {
        let result = `${faceInput}\u2666`;
        return result
    }
    else if (suitInput == 'D') {
        let result = `${faceInput}\u2663`;
        return result
    }
} console.log(playingCards('1', 'C'))
//  Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//  Valid card suits are: S (♠), H (♥), D (♦), C (♣)
// \u2660 – Spades (♠)
//  \u2665 – Hearts (♥)
//  \u2666 – Diamonds (♦)
//  \u2663 – Clubs (♣)
