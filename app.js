// import functions and grab DOM elements
import { renderIngredients } from './utils.js';

const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');

const remove = document.getElementById('remove');
const save = document.getElementById('submit');
// let state
let ingredientArr = [];

// set event listeners 
function renderIngredient() {
    ingredientList.textContent = '';
    for (let food of ingredientArr) {
        const li = renderIngredients(food);
        ingredientList.append(li);
    }
}

// function displayIngredient() {

// }

// function resetIngredients() {
//     ingredientArr = [];
//     ingredientList.textContent = '';
// }

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

remove.addEventListener('click', () => {
    ingredientArr.pop();
    renderIngredient();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
