import { showMovies } from "../utils/dataTreatment.js";
import { API_KEY } from "./api_key.js"; //

const baseURL = 'https://api.themoviedb.org/3/'; //start URL FROM API for Fetching;
export const portraitsBaseURL = 'https://image.tmdb.org/t/p/w300'; //URL to get poster and credits profile images.

//FETCH LIST MOVIES
export async function getMovies(category='popular', searchInput) {
    const mainFrame = document.getElementById('mainFrame');
    mainFrame.innerHTML = '';

    try {//TRying to explain...            if no search nothing to do...      if not search put /     reserved to category  if no search query stays empty
        const res = await fetch(`${baseURL}${!searchInput ? '' : 'search/'}movie${!searchInput ? '/' : ''}${category}?query=${searchInput}&api_key=${API_KEY}&language=es-ES&page=1`);
        
        if (!res.ok) throw new Error('Petition Error ' + res.status);
        const data = await res.json();
        showMovies(mainFrame, data);
        //return console.log(data);

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

