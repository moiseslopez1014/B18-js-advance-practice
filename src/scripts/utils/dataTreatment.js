import { createMovieCard } from "../elements/mainFrame.js";

//create and append a card for each movie we get
export function showMovies(container, movies) {
  movies.results.forEach((movie) => {
    return container.appendChild(createMovieCard(movie));
  });
};

