import { showDetails } from "../elements/mainFrame.js";
import { setViewingStatus, viewingMode } from "../modules/state.js";
import { showMovies } from "../utils/dataTreatment.js";
import { showToolBar } from "../utils/toolbar.js";
 //
export const API_KEY=
    "a4eebd80d1f64fdddb023da9a6dd2d79" ///la clave de acceso al servidor 
  //TODO->: END POINT && AND SEARCH   
;
const baseURL = 'https://api.themoviedb.org/3/'; //start URL FROM API for Fetching;
export const portraitsBaseURL = 'https://image.tmdb.org/t/p/w300'; //URL to get poster and credits profile images.

//FETCH LIST MOVIES
export async function getMovies(category='popular', searchInput) {
    const mainFrame = document.getElementById('mainFrame');
    mainFrame.innerHTML = '';
    mainFrame.className = viewingMode;

    try {//TRying to explain...            if no search nothing to do...      if not search put /     reserved to category  if no search query stays empty
        const res = await fetch(`${baseURL}${!searchInput ? '' : 'search/'}movie${!searchInput ? '/' : ''}${category}?query=${searchInput}&api_key=${API_KEY}&language=es-ES&page=1`);
        
        if (!res.ok) throw new Error('Petition Error ' + res.status);
        const data = await res.json();
        showMovies(mainFrame, data);
        //return console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

// FETCH CREDITS INFO
export async function getMovieDetailed(movieID) {
    const mainFrame = document.getElementById('mainFrame');
    const mainFrame2 = document.getElementById('mainFrame2');
    const toolbar = document.querySelector('.settingsMovieBar');

    mainFrame.innerHTML = '';
    mainFrame2.innerHTML = '';

    // CAMBIAR ESTADO
    setViewingStatus("details");

    // REPINTAR TOOLBAR
    toolbar.innerHTML = '';
    showToolBar(toolbar, "details");
    try {
        const res = await fetch(`${baseURL}movie/${movieID}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`);

        if (!res.ok) throw new Error('Petition Error ' + res.status);
        const data = await res.json();

        console.log(data);
        return showDetails(data, mainFrame2);
    } catch (error) {
        console.log(error.message);
    }
}

