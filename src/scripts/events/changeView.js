
import { setViewingMode } from '../../main.js';
import { getMovies } from '../api/fetching.js';

export function hookViewButtons() {
  const viewButtons = document.querySelector('.view-buttons');
  if (!viewButtons) return;

  viewButtons.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-view]');
    if (!btn) return;

    const mode = btn.dataset.view; // 'grid' o 'list'
    if (mode === 'grid') setViewingMode('movie-grid');
    else if (mode === 'list') setViewingMode('movie-list');

    getMovies(); // repinta usando viewingMode desde state.js
  });
}