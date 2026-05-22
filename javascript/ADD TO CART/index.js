const productsContainer = document.getElementById('products-container');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];
let products = [];


async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // Converting USD to INR (Approx 1 USD = 83 INR)
        products = data.products.map(p => ({ ...p, price: p.price * 83 }));
        renderProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
        productsContainer.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    }
}


function renderProducts() {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description.substring(0, 80)}...</p>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({
            cartId: Date.now() + Math.random(), 
            ...product
        });
        updateCart();
    }
};


window.removeFromCart = function(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCart();
};

function updateCart() {

    cartCountElement.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.cartId})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
        checkoutBtn.disabled = false;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = total.toFixed(2);
}

fetchProducts();