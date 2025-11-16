import { viewingMode, setViewingMode } from "../modules/state.js";

//CHANGES CLASS FOR MOVIE DIV
export function changeView(buttonsDiv) {
  buttonsDiv.addEventListener("click", (event) => {
    const target = event.target;
    const mainFrame = document.getElementById("mainFrame");
    if (!mainFrame) return;

    if (target.id === "gridIcon") {
      setViewingMode("movie-grid");
    } else if (target.id === "listIcon") {
      setViewingMode("movie-list");
    } else {
      return;
    }

    mainFrame.className = viewingMode;
  });
}
