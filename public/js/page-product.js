// Cart
function initCart() {
    const cartCounter = document.getElementById('cart-counter');
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    const productName = document.querySelector('.product__name').textContent;

    let objectCart = {
        products: [],
    }

    function showCartCounter() {
        cartCounter.classList.remove('hidden');
    }

    function hideCartCounter() {
        cartCounter.classList.add('hidden');
    }

    function makeAddToCartBtnInactive() {
        addToCartBtn.classList.add('btn_inactive');
        document.querySelector('.btn__text_cart').textContent = 'Товар уже в корзине';
    }

    function makeAddToCartBtnActive() {
        addToCartBtn.classList.remove('btn_inactive');
        document.querySelector('.btn__text_cart').textContent = 'Добавить в корзину';
    }

    if (localStorage.getItem('product')) {
        objectCart.products.push(localStorage.getItem('product'));
    }

    if (objectCart.products.length) {
        showCartCounter();
        makeAddToCartBtnInactive();
        cartCounter.textContent = `${objectCart.products.length}`;
    }

    addToCartBtn.addEventListener('click', function() {
        if (objectCart.products.includes(productName)) {
            hideCartCounter();
            makeAddToCartBtnActive();
            objectCart.products.pop();
            localStorage.removeItem('product');
        } else {
            showCartCounter();
            makeAddToCartBtnInactive();
            objectCart.products.push(productName);
            localStorage.setItem('product', objectCart.products[objectCart.products.length - 1]);
        }

        cartCounter.textContent = `${objectCart.products.length}`;
    });
}

initCart();
