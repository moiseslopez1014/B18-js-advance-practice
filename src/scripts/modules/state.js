// state.js
export let viewingMode = 'movie-grid';
export let viewingStatus = 'movies';

export function setViewingMode(mode) {
  viewingMode = mode;
}

export function setViewingStatus(status) {
  viewingStatus = status;
}