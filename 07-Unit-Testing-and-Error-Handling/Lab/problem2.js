function solve(face, suit) {
    let possibleFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let possibleSuit = ['S', 'H', 'D', 'C'];
    let mapper = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    let card = {};

    if (possibleFace.includes(face)) {
        card.face = face;
    } else {
        throw new Error('Error');
    }

    if (possibleSuit.includes(suit)) {
        card.suit = suit;
    } else {
        throw new Error('Error');
    }

    card.toString = () => `${card.face}${mapper[card.suit]}`;

    return card;
}

// console.log(solve('A', 'S').toString());
// console.log(solve('10', 'H').toString());
// console.log(solve('1', 'C').toString());

// module.exports = solve;