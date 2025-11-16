import { getMovies } from "../api/fetching.js";


export function searchMovies() {
    const searchButton = document.getElementById('search-movie-btn');
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('search-movie-input');
        console.log(searchInput.value);
        getMovies('', searchInput.value)
    })
}