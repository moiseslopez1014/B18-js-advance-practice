import { changeView } from "../events/changeView.js";
import { createCategorySelection, showToolBar } from "../utils/toolbar.js";
import { changeCategory } from "../events/changeCategory.js";
import { cache, setViewingStatus } from "../modules/state.js";
import { getMovies } from "../api/fetching.js";

export function createToolBarButtons(container) {
    const viewButtons = document.createElement('div');
    viewButtons.className = 'view-buttons';

    const categorySelector = document.createElement('select');
    
    //Call to function to get categories
    createCategorySelection(categorySelector);
    
    // GRID ICON
    const gridIcon = document.createElement('img');
    gridIcon.setAttribute('src', '../../../public/grid-layout.svg');
    gridIcon.setAttribute('id', 'gridIcon');
    gridIcon.className = 'viewButtons';

    // LIST ICON
    const listIcon = document.createElement('img');
    listIcon.setAttribute('src', '../../../public/list-layout.svg');
    listIcon.setAttribute('id', 'listIcon');
    listIcon.className = 'viewButtons';

    viewButtons.appendChild(gridIcon);
    viewButtons.appendChild(listIcon);
    container.appendChild(viewButtons);
    container.appendChild(categorySelector);

    //CALL TO EVENTS
    changeView(viewButtons);
    changeCategory(categorySelector);
}


    //RETURN BUTTON
export function createReturnButton(container) {
    const returnButton = document.createElement('img');
    returnButton.setAttribute('src','../../../public/left-arrow.svg');

    returnButton.addEventListener("click", () => {
        const toolbar = document.querySelector('.settingsMovieBar');
        const creditsSection = document.getElementById('mainFrame2')
        creditsSection.innerHTML = '';

        setViewingStatus("movies");
        toolbar.innerHTML = '';
        showToolBar(toolbar, "movies");

        getMovies(cache.lastCategory, cache.lastSearch);
    });

    container.appendChild(returnButton);

}
