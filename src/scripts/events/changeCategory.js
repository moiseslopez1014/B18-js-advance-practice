import { getMovies } from "../api/fetching.js";


export function changeCategory(container) {
    container.addEventListener('change', event => {
        const value = event.target.value;
        if (value === 'null') return;
        getMovies(value, '');
    });
}