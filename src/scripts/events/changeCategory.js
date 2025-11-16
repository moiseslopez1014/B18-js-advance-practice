import { getMovies } from "../api/fetching.js";

// GETS VALUES FROM SELECTOR AND CALL FETCH WITH A CATEGORY
export function changeCategory(container) {
  container.addEventListener("change", (event) => {
    const value = event.target.value;
    if (value === "null") return;
    getMovies(value, "");
  });
}
