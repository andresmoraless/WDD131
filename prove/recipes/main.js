import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const index = random(list.length);
  return list[index];
}

function getRandomRecipe(list) {
  return getRandomListEntry(list);
}

function getRandomTag(list) {
  const allTags = list.flatMap(recipe => recipe.tags);
  return getRandomListEntry(allTags);
}

function shuffle(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getNRandomRecipes(list, n) {
    const shuffled = shuffle(list);
    return shuffled.slice(0, n);
  }
  
  console.log("Random recipe:", getRandomRecipe(recipes));
  console.log("Random tag:", getRandomTag(recipes));
  console.log("Five random recipes:", getNRandomRecipes(recipes, 5));

  function tagsTemplate(tags) {
    let html = "";
    for (let tag of tags) {
      html += `<div class="tag">${tag}</div>`;
    }
    return html;
  }
  
  function ratingTemplate(rating) {
    let html = `
      <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
    `;
  
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
      } else {
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
      }
    }
  
    html += `</span>`;
    return html;
  }
  
  function recipeTemplate(recipe) {
    return `
      <div class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-text">
          ${tagsTemplate(recipe.tags)}
          <h2>${recipe.name}</h2>
          ${ratingTemplate(recipe.rating)}
          <p class="description">${recipe.description}</p>
        </div>
      </div>
    `;
  }
  
  function renderRecipes(recipeList) {
    const output = document.querySelector("main");
    output.innerHTML = recipeList.map(recipeTemplate).join("");
  }
  
  function filterRecipes(query) {
    query = query.toLowerCase();
  
    const filtered = recipes.filter(recipe => {
      const nameMatch = recipe.name.toLowerCase().includes(query);
      const descMatch = recipe.description.toLowerCase().includes(query);
      const tagMatch = recipe.tags.find(tag =>
        tag.toLowerCase().includes(query)
      );
  
      return nameMatch || descMatch || tagMatch;
    });
  
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  
    return filtered;
  }
  
  function searchHandler(e) {
    e.preventDefault();
  
    const input = document.querySelector("#searchInput");
    const query = input.value.trim().toLowerCase();
  
    const results = filterRecipes(query);
    renderRecipes(results);
  }
  
  function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
  
    document
      .querySelector("#searchButton")
      .addEventListener("click", searchHandler);
  }
  
  init();