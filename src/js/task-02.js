const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients

const markup = ingredients
  .map(elem => {
  const itemEl = document.createElement('li')
  itemEl.textContent = elem
  itemEl.classList.add('item')
  
  return itemEl
})
console.log(markup);

const listEl = document.querySelector('#ingredients')
listEl.append(...markup)
