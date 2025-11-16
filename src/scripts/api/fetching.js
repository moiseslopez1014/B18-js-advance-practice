import { showDetails } from "../elements/mainFrame.js";
import { cache, setViewingStatus, viewingMode } from "../modules/state.js";
import { showMovies } from "../utils/dataTreatment.js";
import { showToolBar } from "../utils/toolbar.js";
import { API_KEY } from "./api_key.js";

const baseURL = "https://api.themoviedb.org/3/";
export const portraitsBaseURL = "https://image.tmdb.org/t/p/w300";

export async function getMovies(category = "popular", searchInput) {
  const mainFrame = document.getElementById("mainFrame");
  mainFrame.innerHTML = "";
  mainFrame.className = viewingMode; 

  const sameCategory = category === cache.lastCategory; 
  const sameSearch = searchInput === cache.lastSearch;

  if (sameCategory && sameSearch && cache.lastResults) {
    showMovies(mainFrame, { results: cache.lastResults }); 
    return;
  }

  try {
    const res = await fetch(
      `${baseURL}${!searchInput ? "" : "search/"}movie${
        !searchInput ? "/" : ""
      }${category}?query=${searchInput}&api_key=${API_KEY}&language=es-ES&page=1`
    );

    if (!res.ok) throw new Error("Petition Error " + res.status);
    const data = await res.json();

    cache.lastCategory = category;
    cache.lastSearch = searchInput; 
    cache.lastResults = data.results;

    showMovies(mainFrame, data);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieDetailed(movieID) {
  const mainFrame = document.getElementById("mainFrame");
  const mainFrame2 = document.getElementById("mainFrame2");
  const toolbar = document.querySelector(".settingsMovieBar");

  mainFrame.innerHTML = "";
  mainFrame2.innerHTML = ""; 

  setViewingStatus("details");

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
