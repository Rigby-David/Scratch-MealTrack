export function renderIngredients(food) {
    const li = document.createElement('li');
    li.textContent = `${food.ingredient} ${food.qty} ${food.measurements}`;
    return li;
}