// import functions and grab DOM elements
import { renderIngredients } from './utils.js';

const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');
const mealName = document.getElementById('meal-name')

const remove = document.getElementById('remove');
const save = document.getElementById('submit');
// let state
let ingredientArr = [];
let mealArr = [];

// set event listeners 
function renderIngredient() {
    ingredientList.textContent = '';
    for (let food of ingredientArr) {
        const li = renderIngredients(food);
        ingredientList.append(li);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = new FormData(form);
    const item = {
        ingredient: data.get('ingredients'),
        qty: data.get('qty'),
        measurements: data.get('measurement'),
    };
    ingredientArr.push(item);
    renderIngredient();
    form.reset();
    console.log('hi', item);

});

save.addEventListener('click', () => {
    const name = mealName.value;
    const total = ingredientArr.length;
    mealArr.push({ name, total });
    renderMeals();
    resetIngredients();
});

remove.addEventListener('click', () => {
    ingredientArr.pop();
    renderIngredient();
});

function resetIngredients() {
    ingredientArr = 0;
    ingredientList.textContent = '';
}

function renderMeals() {
    mealList.textContent = '';
    for (let meal of mealArr) {
        const li = renderMealLi(meal);
        mealList.append(li);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
