import { categoriesES } from "../api/api_vars.js";
import { createReturnButton, createToolBarButtons } from "../elements/navigationBar.js";

export function showToolBar(container, mode) {
    if (mode === 'movies') {
        createToolBarButtons(container);
    }
    else {
        createReturnButton(container);
    }
}


export function createCategorySelection(container) {
    const categoriesToAppend = Object.entries(categoriesES);

    categoriesToAppend.map((category) => {
        const categoryElement = document.createElement('option');
        categoryElement.setAttribute('value', category[1]);
        categoryElement.textContent = category[0];

        container.appendChild(categoryElement);
    })
}