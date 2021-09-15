function colorize() {
    let tableEntries = document.querySelectorAll('tr:nth-child(even)');
    for (const tableEntry of tableEntries) {
        tableEntry.style.backgroundColor = 'teal';
    }
}