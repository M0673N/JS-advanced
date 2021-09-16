function search() {
    let search = document.getElementById('searchText');
    let result = document.getElementById('result');
    let towns = document.getElementsByTagName("li");

    let matches = 0;
    for (const town of towns) {
        if (town.textContent.includes(search.value)) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline"
            matches++;
        }
    }
    result.textContent = `${matches} matches found`;
}