
const add_to_cart_button = document.getElementsByClassName('add-to-cart-button');


Array.from(add_to_cart_button).forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'http://127.0.0.1:5500/product.html';
    });
});




