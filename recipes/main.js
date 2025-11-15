import { recipes } from "./recipes.mjs";

const list = document.getElementById("recipe-list");
const form = document.getElementById("search-form");
const input = document.getElementById("search");

// Render all recipes on load
displayRecipes(recipes);

function displayRecipes(recipeArray) {
    list.innerHTML = "";

    recipeArray.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">
        <div class="details">
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <div class="rating" aria-label="Rating: ${recipe.rating} out of 5">
        ${"★".repeat(Math.round(recipe.rating))}
        ${"☆".repeat(5 - Math.round(recipe.rating))}
        </div>
    </div>
    `;

    list.appendChild(card);
    });
}

// SEARCH FILTER
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.toLowerCase();

    const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(text)
    );

    displayRecipes(filtered);
});
