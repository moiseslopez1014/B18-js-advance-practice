import { portraitsBaseURL } from "../api/fetching.js";



export function createMovieCard(movie) {
  const movieDiv = document.createElement("div"); // card
  movieDiv.className="movieDiv";

  const moviePoster = document.createElement("img"); //poster
  moviePoster.className = 'movie-poster';
  if (!movie.poster_path) {
    moviePoster.setAttribute("src", "../../../public/NoPoster.png"); //In case movie doesnt have a poster

  } else {
    moviePoster.setAttribute("src", `${portraitsBaseURL}${movie.poster_path}`); //set img with movie poster
  }

  const divInfo = document.createElement('div');
  divInfo.className = 'divInfo';


  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;
  movieTitle.className = 'movie-title'

  movieTitle.setAttribute("movie-id", movie.id); // we store the ID of the movie to use later in the events

  moviePoster.setAttribute("movie-id", movie.id); // we store the ID of the movie to use later in the events

  const movieInfo = document.createElement("p");
  movieInfo.className="movieInfo"
  movieInfo.textContent = `Rating: ${movie.vote_average.toFixed(2)} | ${movie.release_date.slice(0,4)}`;

  const movieDescription = document.createElement('p');
  movieDescription.textContent = movie.overview;
  movieDescription.className = 'movie-overview'

  movieDiv.appendChild(moviePoster);
  divInfo.appendChild(movieTitle);
  divInfo.appendChild(movieInfo);
  divInfo.appendChild(movieDescription);
  movieDiv.appendChild(divInfo);


  return movieDiv;
}
