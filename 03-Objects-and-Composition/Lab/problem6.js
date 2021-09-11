function fromJSONToHTMLTable(input) {
    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    input = JSON.parse(input);
    result = '<table>\n   <tr>';
    for (const key in input[0]) {
        result += `<th>${escapeHtml(key)}</th>`;
    }
    result += '</tr>\n';
    for (const obj of input) {
        result += '   <tr>';
        for (const key in obj) {
            result += `<td>${escapeHtml(obj[key])}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</table>';

    return result;
}
// let input = '[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]'
// let input2 = '[{"Name":"Pesho", "Score":4, "Grade":8}, \
// {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, "Grade":10}]'

// console.log(fromJSONToHTMLTable(input2));