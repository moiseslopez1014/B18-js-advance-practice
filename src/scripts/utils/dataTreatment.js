import { createMovieCard } from "../elements/mainFrame.js";

import { viewingMode } from "../modules/state.js";

//create and append a card for each movie we get
export function showMovies(container, movies) {
  container.className = viewingMode;
  movies.results.forEach((movie) => {
    return container.appendChild(createMovieCard(movie));
  });
}
