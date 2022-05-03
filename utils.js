export function renderIngredients(item) {
    const li = document.createElement('li');
    li.textContent = `${item.qty} ${item.measurements} of ${item.ingredient}`;
    return li;
}