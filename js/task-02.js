const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach (Element => {
  let listItem = document.createElement("li");
  listItem.innerHTML = Element;
  listItem.classList.add ("item");
  
  document.querySelector("#ingredients").append(listItem);
} )