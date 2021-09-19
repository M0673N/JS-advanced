function solve() {
    let addButtons = Array.from(document.querySelectorAll('.add-product'));
    let productTitles = Array.from(document.querySelectorAll('.product-title'));
    let productPrices = Array.from(document.querySelectorAll('.product-line-price'));
    let cart = {};
    let checkout = document.querySelector('.checkout');
    let textarea = document.querySelector('textarea');

    addButtons.forEach(function (button, index) {
        button.addEventListener('click', function (e) {
            if (!cart.hasOwnProperty(productTitles[index].textContent)) {
                cart[productTitles[index].textContent] = Number(productPrices[index].textContent);
            } else {
                cart[productTitles[index].textContent] += Number(productPrices[index].textContent);
            }

            textarea.textContent += `Added ${productTitles[index].textContent} for ${Number(productPrices[index].textContent).toFixed(2)} to the cart.\n`;
        });
    });

    checkout.addEventListener('click', function (e) {
        let list = Object.keys(cart);
        let totalPrice = Object.values(cart).reduce((acc, x) => acc + x, 0);
        textarea.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
        cart = {};
        addButtons.forEach(button => button.setAttribute('disabled', 'true'));
        checkout.setAttribute('disabled', 'true');
    });
}