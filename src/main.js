import './scss/style.scss'

const anchorElement = document.querySelector('#app');

const settingsMovieBar = document.createElement('div');
settingsMovieBar.className = 'settingsMovieBar';

anchorElement.appendChild(settingsMovieBar);


let viewingmode = 'grid';
let viewingstatus = 'movies';

