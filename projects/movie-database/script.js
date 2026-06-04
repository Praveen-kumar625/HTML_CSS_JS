/**
 * @file script.js
 * @description Integrated Movie Search Engine using TVMaze API.
 * @author Praveen Kumar
 */

const UI = {
  input: document.getElementById('searchInput'),
  btn: document.getElementById('searchBtn'),
  list: document.getElementById('movieList'),
};

/**
 * Fetches movie data from TVMaze API asynchronously.
 * Implements modern Fetch API with comprehensive error handling.
 * @param {string} searchText 
 */
const fetchMovies = async (searchText) => {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    
    const data = await response.json();
    renderMovies(data);
  } catch (error) {
    console.error('Data acquisition failed:', error);
    UI.list.innerHTML = `
      <p style="text-align: center; grid-column: 1 / -1; color: #ef4444;">
        Failed to load movies. Please check your connection or try again later.
      </p>`;
  }
};

/**
 * Renders the acquired movie collection to the DOM.
 * @param {Array} moviesData 
 */
const renderMovies = (moviesData) => {
  // Clear previous results
  UI.list.innerHTML = '';

  if (moviesData.length === 0) {
    UI.list.innerHTML = `
      <p style="text-align: center; grid-column: 1 / -1;">
        No results found. Please refine your search query.
      </p>`;
    return;
  }

  // Iterate and build individual movie cards
  moviesData.forEach((item) => {
    // Only render items with available cover art for visual quality
    if (item.show.image) {
      const cardHTML = `
        <article class="movie-card">
          <img src="${item.show.image.original}" alt="${item.show.name}" loading="lazy">
          <div class="movie-title">${item.show.name}</div>
        </article>
      `;
      UI.list.insertAdjacentHTML('beforeend', cardHTML);
    }
  });
};

/**
 * Orchestrates the search lifecycle.
 */
const handleSearchRequest = () => {
  const query = UI.input.value.trim();
  
  if (query) {
    // Inject loading state for better UX
    UI.list.innerHTML = `<p style="text-align: center; grid-column: 1 / -1;">Searching for "${query}"...</p>`;
    fetchMovies(query);
  } else {
    alert('Please enter a movie title to search.');
  }
};

// =========================================
// Event Listeners
// =========================================

UI.btn.addEventListener('click', handleSearchRequest);

UI.input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleSearchRequest();
  }
});
