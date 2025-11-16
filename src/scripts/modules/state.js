export let viewingMode = "movie-grid";
export let viewingStatus = "movies";

// CACHE
export const cache = {
    lastCategory: 'now_playing',
    lastSearch: '',
    lastResults: null,
};

export function setViewingMode(mode) {
    viewingMode = mode;
}

export function setViewingStatus(status) {
    viewingStatus = status;
}