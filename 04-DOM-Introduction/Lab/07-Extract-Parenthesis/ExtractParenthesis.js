function extract(content) {
    let text = document.getElementById(content).textContent;
    let result = text.match(/\([A-Za-z0-9 ]*\)/g);
    return result.join('; ')
}