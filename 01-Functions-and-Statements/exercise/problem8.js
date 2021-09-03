function solve(text) {
    list = text.match(/\w+/g);
    result = [];
    for (word of list) {
        result.push(word.toUpperCase());
    }
    console.log(result.join(', '));
}