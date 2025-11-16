import { getMovies } from "../api/fetching.js";


export function changeCategory(container) {
container.addEventListener('change', event => {
  if (event.target.value === 'null') {
    return;
  }
  else {
    getMovies(event.target.value);
  }
})
}

