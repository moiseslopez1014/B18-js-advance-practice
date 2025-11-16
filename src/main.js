import "./scss/auxstule.scss";
import { getMovies } from "./scripts/api/fetching.js";
import { viewingMode, viewingStatus } from "./scripts/modules/state.js";
import { showToolBar } from "./scripts/utils/toolbar.js";
import { searchMovies } from "./scripts/events/searchListener.js";
import "./scss/style.scss";

const anchorElement = document.querySelector("#app");
export const toolbarMovies = document.createElement("div");
toolbarMovies.className = "settingsMovieBar";

anchorElement.appendChild(toolbarMovies);

const mainFrame = document.createElement("section");
mainFrame.className = viewingMode;
mainFrame.setAttribute("id", "mainFrame");

anchorElement.appendChild(mainFrame);

const mainFrame2 = document.createElement("section");
mainFrame2.className = "mainFrame2";
mainFrame2.setAttribute("id", "mainFrame2");

anchorElement.appendChild(mainFrame2);

showToolBar(toolbarMovies, viewingStatus);
getMovies("now_playing", "");
searchMovies();
