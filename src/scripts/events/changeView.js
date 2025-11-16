
import { setViewingMode } from "../modules/state.js"; 
import { getMovies } from "../api/fetching.js";

export function changeView(buttonsDiv) {
    buttonsDiv.addEventListener("click", (event) => {

        const target = event.target;

        if (target.id === "gridIcon") {
            setViewingMode("movie-grid");
            getMovies(); // repinta usando grid
        }

        if (target.id === "listIcon") {
            setViewingMode("movie-list");
            getMovies(); // repinta usando list
        }
    });
}