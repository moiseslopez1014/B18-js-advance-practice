
import { showToolBar } from './scripts/utils/toolbar.js';
import './scss/style.scss'

const anchorElement = document.querySelector('#app');

export const toolbarMovies = document.createElement('div');
toolbarMovies.className = 'settingsMovieBar';

anchorElement.appendChild(toolbarMovies);


export let viewingMode = 'grid';
export let viewingStatus = 'movies';

showToolBar(toolbarMovies, viewingStatus);

