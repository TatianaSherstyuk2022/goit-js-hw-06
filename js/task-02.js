const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList);

const makeIngredients = ingredients.forEach((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.classList.add("item");
  ingredientItemEl.innerHTML = ingredient;

  ingredientsList.append(ingredientItemEl);
});
