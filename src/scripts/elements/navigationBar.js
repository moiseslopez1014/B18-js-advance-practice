import { createCategorySelection } from "../utils/toolbar.js";

export function createToolBarButtons(container) {
    const viewButtons = document.createElement('div');

    const categorySelector = document.createElement('select');
    
    //Call to function to get categories
    createCategorySelection(categorySelector);
    
    //GRID ICON
    const gridIcon = document.createElement('img');
    gridIcon.setAttribute('src','../../../public/grid-layout.svg');
    gridIcon.className = 'grid__Icon';

    //LIST ICON
    const listIcon = document.createElement('img');
    listIcon.setAttribute('src', '../../../public/list-layout.svg');
    listIcon.className = 'list__Icon';

    viewButtons.appendChild(gridIcon);
    viewButtons.appendChild(listIcon);
    container.appendChild(viewButtons);
    container.appendChild(categorySelector);
}
    //RETURN BUTTON
export function createReturnButton(container) {
    const returnButton = document.createElement('img');
    returnButton.setAttribute('src','../../../public/left-arrow.svg');

    container.appendChild(returnButton);
}