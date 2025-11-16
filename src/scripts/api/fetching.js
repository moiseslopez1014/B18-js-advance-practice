import { showDetails } from "../elements/mainFrame.js";
import { cache, setViewingStatus, viewingMode } from "../modules/state.js";
import { showMovies } from "../utils/dataTreatment.js";
import { showToolBar } from "../utils/toolbar.js";
import { API_KEY } from "./api_key.js";

const baseURL = "https://api.themoviedb.org/3/"; //start URL FROM API for Fetching;
export const portraitsBaseURL = "https://image.tmdb.org/t/p/w300"; //URL to get poster and credits profile images.

//FETCH LIST MOVIES
export async function getMovies(category = "popular", searchInput) {
  const mainFrame = document.getElementById("mainFrame");
  mainFrame.innerHTML = ""; //cleans container
  mainFrame.className = viewingMode; //remembers view mode and re-apply

  const sameCategory = category === cache.lastCategory; //get data from memory
  const sameSearch = searchInput === cache.lastSearch;

  if (sameCategory && sameSearch && cache.lastResults) {
    showMovies(mainFrame, { results: cache.lastResults }); // if there is cache, ignore fetch and paint saved content
    return;
  }

  try {
    //TRying to explain...            if no search nothing to do...      if not search put /     reserved to category  if no search query stays empty
    const res = await fetch(
      `${baseURL}${!searchInput ? "" : "search/"}movie${
        !searchInput ? "/" : ""
      }${category}?query=${searchInput}&api_key=${API_KEY}&language=es-ES&page=1`
    );

    if (!res.ok) throw new Error("Petition Error " + res.status);
    const data = await res.json();

    cache.lastCategory = category;
    cache.lastSearch = searchInput; //set cache after fetch
    cache.lastResults = data.results;

    showMovies(mainFrame, data);
  } catch (error) {
    console.log(error.message);
  }
}

// FETCH CREDITS INFO
export async function getMovieDetailed(movieID) {
  const mainFrame = document.getElementById("mainFrame");
  const mainFrame2 = document.getElementById("mainFrame2");
  const toolbar = document.querySelector(".settingsMovieBar");

  mainFrame.innerHTML = "";
  mainFrame2.innerHTML = ""; // cleans

  // CHANGE STATE
  setViewingStatus("details");

  // REPAINT TOOLBAR
  toolbar.innerHTML = "";
  showToolBar(toolbar, "details");
  try {
    const res = await fetch(
      `${baseURL}movie/${movieID}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`
    );

    if (!res.ok) throw new Error("Petition Error " + res.status);
    const data = await res.json();

    return showDetails(data, mainFrame2);
  } catch (error) {
    console.log(error.message);
  }
}
