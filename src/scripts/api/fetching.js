import { API_KEY } from "./api_key.js"; //

const baseURL = 'https://api.themoviedb.org/3/'; //start URL FROM API for Fetching;
export const portraitsBaseURL = 'https://image.tmdb.org/t/p/w300'; //URL to get poster and credits profile images.

//FETCH LIST MOVIES
export async function getMovies(container, category='', searchInput) {
    container.innerHTML = '';

    try {
        const res = await fetch(`${baseURL}${!searchInput ? '' : 'search/'}movie/${category}?query=${searchInput}&api_key=${API_KEY}&language=es-ES&page=1`);
        
        if (!res.ok) throw new Error('Petition Error ' + res.status);
        const data = await res.json();
        return showMovies(container, data);

    } catch (error) {
        console.log(error.message);
    }
}

// FETCH CREDITS INFO
export async function getMovieDetailed(movieID) {
    try {
        const res = await fetch(`${baseURL}movie/${movieID}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`);

        if (!res.ok) throw new Error('Petition Error ' + res.status);
        const data = await res.json();
        return showDetails(data);
    } catch (error) {
        console.log(error.message);
    }
}

