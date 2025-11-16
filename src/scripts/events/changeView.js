
import { setViewingMode } from '../../main.js';
import { getMovies } from '../api/fetching.js';

export function changeView() {
    const gridIcon = document.getElementById("gridIcon");
    const listIcon = document.getElementById("listIcon");

    if (!gridIcon || !listIcon) {
        console.error("❌ No se encontraron los SVG de vista (gridIcon / listIcon)");
        return;
    }

    gridIcon.addEventListener("click", () => {
        setViewingMode("movie-grid");
        getMovies(); // repinta con la vista grid
    });

    listIcon.addEventListener("click", () => {
        setViewingMode("movie-list");
        getMovies(); // repinta con la vista list
    });
}