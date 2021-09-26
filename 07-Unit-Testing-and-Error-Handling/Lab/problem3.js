function printDeckOfCards(cards) {
    let cardsList = [];
    let possibleFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let possibleSuit = ['S', 'H', 'D', 'C'];
    let mapper = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    function createCard() {
        for (const el of cards) {
            let suit = el.slice(-1);
            let face = el.slice(0, el.length - 1);
            let card = {};

            if (possibleFace.includes(face)) {
                card.face = face;
            } else {
                cardsList.push(`Invalid card: ${el}`);
                continue;
            }

            if (possibleSuit.includes(suit)) {
                card.suit = suit;
            } else {
                cardsList.push(`Invalid card: ${el}`);
                continue;
            }

            cardsList.push(`${card.face}${mapper[card.suit]}`);
        }
    }

    createCard();
    return console.log(cardsList.join(' '));
}

// function solve(arr) {
//     return;
// }

// printDeckOfCards(['AS', '10D', 'KH', '2C']);
// printDeckOfCards(['5S', '3D', 'QD', '1C']);


// module.exports = solve;