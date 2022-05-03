// import functions and grab DOM elements
import { renderIngredients } from './utils.js';

const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');

const remove = document.getElementById('remove-ingredient');
const save = document.getElementById('add-ingredient');
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

function displayIngredient() {

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const foodData = new FormData(form);
    const food = {
        ingredient: foodData.get('ingredient'),
        qty: foodData.get('qty'),
        measurements: foodData.get('measurements')
    };
    ingredientArr.push(food);
    renderIngredient();
    form.reset();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
