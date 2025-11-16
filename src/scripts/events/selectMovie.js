import { getMovieDetailed } from "../api/fetching.js";



export function selectMovie(element1, element2) {
    
    element1.addEventListener('click',(event) =>{
        event.stopPropagation();
        getMovieDetailed(element1.getAttribute("movie-id"));
    } );

    element2.addEventListener('click', (event) => {
        event.stopPropagation();
        getMovieDetailed(element2.getAttribute("movie-id"));
    })
}