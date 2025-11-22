import { recipes } from "./recipes.mjs";

const list = document.getElementById("recipe-list");
const form = document.getElementById("search-form");
const input = document.getElementById("search");

/* ---------------------- RANDOM FUNCTIONS ---------------------- */

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomListEntry(arr) {
    return arr[getRandomNumber(arr.length)];
}

/* ---------------------- TEMPLATE + DISPLAY ---------------------- */

function recipeTemplate(recipe) {
    return `
    <div class="recipe-card">
    <img src="${recipe.image}" alt="${recipe.name}">
    <div class="details">
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <div class="rating" aria-label="Rating: ${recipe.rating} out of 5">
            ${"★".repeat(recipe.rating)}
            ${"☆".repeat(5 - recipe.rating)}
        </div>
    </div>
    </div>
    `;
}

function displayRecipes(recipeArray) {
    list.innerHTML = recipeArray.map(recipeTemplate).join("");
}

/* ---------------------- FILTERING ---------------------- */

function filterRecipes(query) {
    query = query.toLowerCase();

    const filtered = recipes.filter(recipe => {
    return (
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
    recipe.ingredients.find(ing => ing.toLowerCase().includes(query))
    );
    });

  // Sort alphabetically
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
}

/* ---------------------- SEARCH HANDLER ---------------------- */

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.toLowerCase();
    const results = filterRecipes(text);

    displayRecipes(results);
});

/* ---------------------- INIT: SHOW RANDOM RECIPE ---------------------- */

function init() {
    const randomRecipe = getRandomListEntry(recipes);
  displayRecipes([randomRecipe]); // must be array
}

init();
