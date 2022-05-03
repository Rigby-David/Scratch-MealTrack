export function renderIngredients(item) {
    const li = document.createElement('li');
    li.textContent = `${item.qty} ${item.measurements} of ${item.ingredient}`;
    return li;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.total} Ingredients`;
    return li;
}