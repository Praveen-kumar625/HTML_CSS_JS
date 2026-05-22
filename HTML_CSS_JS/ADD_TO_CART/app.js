/* app.js */
/* Author: Praveen kumar */

const API_URL = "https://dummyjson.com/products";

// Global scope me products array rakhenge taki cart me add karte waqt access kar sakein
let allProducts = [];

/**
 * API se products fetch karne ka async function.
 * Error handling ke liye try...catch ka use kiya gaya hai.
 */
const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        allProducts = data.products;
        
        renderProducts(allProducts);
    } catch (error) {
        console.error("Products fetch karne mein error:", error);
        document.getElementById('productsContainer').innerHTML = "<p>Failed to load products. Please try again later.</p>";
    }
};

/**
 * UI par products render karne ka logic.
 */
const renderProducts = (products) => {
    const container = document.getElementById('productsContainer');
    container.innerHTML = ""; // Purana content clear karna

    products.forEach((product) => {
        // Semantic card structure aur template literals ka use
        const cardHTML = `
            <article class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
};

/**
 * Specific product ko localStorage based cart mein add karne ka logic.
 */
// Global function rakha hai taki HTML onclick access kar sake
window.addToCart = (id) => {
    // Current cart data fetch karna, agar nahi hai toh empty array
    let cart = JSON.parse(localStorage.getItem("cartData")) || [];
    
    // Product find karna
    const productToAdd = allProducts.find(p => p.id === id);
    
    if (productToAdd) {
        cart.push(productToAdd);
        localStorage.setItem("cartData", JSON.stringify(cart));
        alert(`${productToAdd.title} cart mein add ho gaya!`);
    }
};

// Initial data load
document.addEventListener('DOMContentLoaded', fetchProducts);