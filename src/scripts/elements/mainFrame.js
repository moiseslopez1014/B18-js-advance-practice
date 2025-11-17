import { portraitsBaseURL } from "../api/fetching.js";
import { selectMovie } from "../events/selectMovie.js";

export function createMovieCard(movie) {
  const movieDiv = document.createElement("div"); 
  movieDiv.className = "movieDiv";

  const moviePoster = document.createElement("img"); 
  moviePoster.className = "movie-poster";
  if (!movie.poster_path) {
    moviePoster.setAttribute("src", "../../../public/NoPoster.png"); 
  } else {
    moviePoster.setAttribute("src", `${portraitsBaseURL}${movie.poster_path}`); 
  }

  const divInfo = document.createElement("div");
  divInfo.className = "divInfo";

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;
  movieTitle.className = "movie-title";

  movieTitle.setAttribute("movie-id", movie.id);

  moviePoster.setAttribute("movie-id", movie.id); 

  const movieInfo = document.createElement("p");
  movieInfo.className = "movieInfo";
  movieInfo.textContent = `Rating: ${movie.vote_average.toFixed(
    2
  )} | ${movie.release_date.slice(0, 4)}`;

  const movieDescription = document.createElement("p");
  movieDescription.textContent = movie.overview;
  movieDescription.className = "movie-overview";
  movieDiv.appendChild(moviePoster);
  divInfo.appendChild(movieTitle);
  divInfo.appendChild(movieInfo);
  divInfo.appendChild(movieDescription);
  movieDiv.appendChild(divInfo);

  selectMovie(moviePoster, movieTitle);

  return movieDiv;
}

export function showDetails(movie, container) {
  const mainFrame2 = document.getElementById("mainFrame2");
  mainFrame2.style.setProperty(
    "--bg-img",
    `url("https://image.tmdb.org/t/p/w300${movie.poster_path}")`
  );


  const creditsImg = document.createElement("img");
  if (movie.poster_path === null) {
    creditsImg.setAttribute("src", "../../imgs/logomovies.png");
  } else {
    creditsImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    );
  }
  creditsImg.className = "creditsIMG";

  container.appendChild(creditsImg);


  const creditsDiv = document.createElement("div");
  creditsDiv.className = "creditsDiv";

  container.appendChild(creditsDiv);


  const creditsTitle = document.createElement("h2");
  creditsTitle.textContent = movie.title;

  creditsDiv.appendChild(creditsTitle);

  const movieInfo = document.createElement("p");
  movieInfo.className = "movieInfo";
  movieInfo.textContent = `Rating: ${movie.vote_average.toFixed(
    2
  )} | ${movie.release_date.slice(0, 4)}`;

  creditsDiv.appendChild(movieInfo);


  const creditsDescription = document.createElement("p");
  creditsDescription.textContent = `Sinopsis: ${movie.overview}`;

  creditsDiv.appendChild(creditsDescription);


  const creditsCastingDiv = document.createElement("div");
  creditsCastingDiv.className = "creditsCastingDiv";

  creditsDiv.appendChild(creditsCastingDiv);

    const creditsCrewDiv = document.createElement("div");
  creditsCrewDiv.className = "creditsCastingDiv";

  creditsDiv.appendChild(creditsCrewDiv);



  movie.credits.cast.forEach((actor) => {
    if (actor.profile_path !== null) {
      const actorDiv = document.createElement("div");
      actorDiv.className = "actorDiv";

      creditsCrewDiv.appendChild(actorDiv);

      const actorPortrait = document.createElement("img");
      actorPortrait.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w300${actor.profile_path}`
      );

      actorDiv.appendChild(actorPortrait);

      const actorName = document.createElement("p");
      actorName.textContent = `${actor.name} | As: ${actor.character}`;

      actorDiv.appendChild(actorName);


    }
  });


  movie.credits.crew.forEach((crew) => {
    if (crew.profile_path !== null) {
      const crewDiv = document.createElement("div");
      crewDiv.className = "actorDiv";

      creditsCastingDiv.appendChild(crewDiv);

      const crewPortrait = document.createElement("img");
      crewPortrait.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w300${crew.profile_path}`
      );

      crewDiv.appendChild(crewPortrait);

      const crewName = document.createElement("p");
      crewName.textContent = `${crew.name} | As: ${crew.job}`

      crewDiv.appendChild(crewName);

    }
  });



}
