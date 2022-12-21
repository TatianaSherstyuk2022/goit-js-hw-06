const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);

const makeIngredients = ingredients.forEach(ingredient => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.innerHTML = ingredient;


  ingredientsList.append(ingredientsItemEl);
});
