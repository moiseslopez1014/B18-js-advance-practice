
import { setViewingMode } from '../../main.js';

export function changeView(buttonsDiv) {
    buttonsDiv.addEventListener('click', (event) => {
        const mode = event.target.dataset.view;

        if (mode === 'grid') {
            setViewingMode('movie-grid');
            console.log('1');
        }
        else if (mode === 'list') {
            setViewingMode('movie-list');
            console.log('2');
        }
    });
}

