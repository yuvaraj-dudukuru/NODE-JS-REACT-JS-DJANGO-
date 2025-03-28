function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " added to cart!");
}

window.onload = function() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv = document.getElementById('cart-items');
    if (cartDiv) {
        cartItems.forEach(item => {
            let p = document.createElement('p');
            p.textContent = item;
            cartDiv.appendChild(p);
        });
    }
}
