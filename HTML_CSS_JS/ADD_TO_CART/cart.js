/* cart.js */
/* Author: Praveen kumar */

/**
 * LocalStorage se cart items fetch karke display karne ka function.
 */
const loadCartItems = () => {
    const cartContainer = document.getElementById('cartContainer');
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    cartContainer.innerHTML = ""; // Pehle ka content clear karein

    if (cartData.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart">Aapka cart khali hai. 🛍️</p>`;
        return;
    }

    cartData.forEach((product, index) => {
        // Template literals se cart item ka HTML structure banana
        const cardHTML = `
            <article class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                    <button class="add-btn" onclick="removeFromCart(${index})" style="background-color: var(--wrong-border);">Remove</button>
                </div>
            </article>
        `;
        cartContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
};

/**
 * Item ko cart se remove karne ka function.
 * Index ke basis par item delete kiya jayega.
 */
window.removeFromCart = (index) => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    
    // Array.splice() ka use karke item hatana
    cartData.splice(index, 1);
    
    // Updated cart wapas save karna
    localStorage.setItem("cartData", JSON.stringify(cartData));
    
    // UI ko refresh karna
    loadCartItems();
};

// Jab DOM load ho jaye, tab cart items display karein
document.addEventListener('DOMContentLoaded', loadCartItems);