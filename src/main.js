
import { getMovies } from './scripts/api/fetching.js';
import { showToolBar } from './scripts/utils/toolbar.js';
import './scss/style.scss'


export let viewingMode = 'movie-grid'; //ALTERNATE WITH LIST OR GRID
export let viewingStatus = 'movies';// ALTERNATE TO SHOW MOVIES OR CREDITS

export function setViewingMode(mode) {
    viewingMode = mode;
}

const anchorElement = document.querySelector('#app');
//TOOLBAR WHIT CATEGORY SELECTOR
export const toolbarMovies = document.createElement('div');
toolbarMovies.className = 'settingsMovieBar';

anchorElement.appendChild(toolbarMovies);

// MAIN CONTAINER FOR MOVIES
const mainFrame = document.createElement('section');
mainFrame.className = viewingMode;

anchorElement.appendChild(mainFrame);


//VARIABLES TO DETERMINE MODE OF VIEW AND SECTION


// FUNCTION TO CREATE AND SHOW TOOLBAR ELEMENTS
showToolBar(toolbarMovies, viewingStatus);
//FUNCTION TO GET CONTENT
getMovies(mainFrame, 'now_playing', '');

