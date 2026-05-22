/* script.js */
/* Author: Praveen kumar */

const UI = {
    input: document.getElementById('searchInput'),
    btn: document.getElementById('searchBtn'),
    list: document.getElementById('movieList')
};

/**
 * TVMaze API se movies fetch karne ka async function.
 * Yahan axios ki jagah modern Fetch API + async/await ka use kiya gaya hai.
 */
const fetchMovies = async (searchText) => {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
        if (!response.ok) throw new Error("API response error");
        
        const data = await response.json();
        renderMovies(data);
    } catch (error) {
        console.error("Movie fetch karte waqt error aayi:", error);
        UI.list.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">Failed to load movies. Error: ${error.message}</p>`;
    }
};

/**
 * DOM me movies ko render karne ka function
 */
const renderMovies = (moviesData) => {
    // Purana list clear karna
    UI.list.innerHTML = '';

    if (moviesData.length === 0) {
        UI.list.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">Koi movie nahi mili. Try another name!</p>`;
        return;
    }

    // Har movie ke liye card banana
    moviesData.forEach((item) => {
        // Agar image present nahi hai toh usko skip ya placeholder de sakte hain, humne skip kiya hai
        if (item.show.image) {
            const cardHTML = `
                <article class="movie-card">
                    <img src="${item.show.image.original}" alt="${item.show.name}">
                    <div class="movie-title">${item.show.name}</div>
                </article>
            `;
            // Template literals ka use karke DOM me insert
            UI.list.insertAdjacentHTML('beforeend', cardHTML);
        }
    });
};

/**
 * Search logic execute karna
 */
const handleSearch = () => {
    const searchText = UI.input.value.trim();
    if (searchText !== "") {
        // Jab fetch start ho raha ho toh loading dikhana
        UI.list.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">Loading...</p>`;
        fetchMovies(searchText);
    } else {
        alert("Please enter a movie name to search.");
    }
};

// Event Listeners
UI.btn.addEventListener('click', handleSearch);

// Enter press karne pe bhi search start hona chahiye
UI.input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});