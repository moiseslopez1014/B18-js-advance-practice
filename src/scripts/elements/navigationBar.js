import { changeView } from "../events/changeView.js";
import { createCategorySelection } from "../utils/toolbar.js";

export function createToolBarButtons(container) {
    const viewButtons = document.createElement('div');

    const categorySelector = document.createElement('select');
    
    //Call to function to get categories
    createCategorySelection(categorySelector);
    
    //GRID ICON
    const gridIcon = document.createElement('img');
    gridIcon.setAttribute('src','../../../public/grid-layout.svg');
    gridIcon.setAttribute = ('data-view', 'grid');
    gridIcon.className = 'viewButtons';


    //LIST ICON
    const listIcon = document.createElement('img');
    listIcon.setAttribute('src', '../../../public/list-layout.svg');
    listIcon.setAttribute = ('data-view', 'list');
    listIcon.className = 'viewButtons';

    viewButtons.appendChild(gridIcon);
    viewButtons.appendChild(listIcon);
    container.appendChild(viewButtons);
    container.appendChild(categorySelector);
    
    //CALL TO EVENTS
    changeView(viewButtons)

}
    //RETURN BUTTON
export function createReturnButton(container) {
    const returnButton = document.createElement('img');
    returnButton.setAttribute('src','../../../public/left-arrow.svg');

    container.appendChild(returnButton);
}
