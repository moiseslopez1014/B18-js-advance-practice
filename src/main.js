import "./scss/auxstule.scss";
import { getMovies } from './scripts/api/fetching.js';
import { viewingMode, viewingStatus } from './scripts/modules/state.js';
import { showToolBar } from './scripts/utils/toolbar.js';
import { searchMovies } from "./scripts/events/searchListener.js";
import './scss/style.scss'



const anchorElement = document.querySelector('#app');
//TOOLBAR WHIT CATEGORY SELECTOR
export const toolbarMovies = document.createElement('div');
toolbarMovies.className = 'settingsMovieBar';

anchorElement.appendChild(toolbarMovies);

// MAIN CONTAINER FOR MOVIES
const mainFrame = document.createElement('section');
mainFrame.className = viewingMode;
mainFrame.setAttribute('id','mainFrame');

anchorElement.appendChild(mainFrame);

// MAIN CONTAINER FOR CREDITS
const mainFrame2 = document.createElement('section');
mainFrame2.className = 'mainFrame2';
mainFrame2.setAttribute('id','mainFrame2');

anchorElement.appendChild(mainFrame2);


// FUNCTION TO CREATE AND SHOW TOOLBAR ELEMENTS
showToolBar(toolbarMovies, viewingStatus);
//FUNCTION TO GET CONTENT
getMovies('now_playing', '');
//FUNCTION TO SEARCH
searchMovies();
