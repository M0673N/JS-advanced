function encodeAndDecodeMessages() {
    let textArea1 = document.querySelectorAll('textarea')[0];
    let textArea2 = document.querySelectorAll('textarea')[1];
    let button1 = document.querySelectorAll('button')[0];
    let button2 = document.querySelectorAll('button')[1];

    button1.addEventListener('click', function (e) {
        let text = textArea1.value;
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        textArea2.value = result;
        textArea1.value = '';
    });

    button2.addEventListener('click', function (e) {
        let text = textArea2.value;
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) - 1);
        }
        textArea2.value = result;
    });
}