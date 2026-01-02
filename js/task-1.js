const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const heading = item.querySelector('h2');
  console.log(`Category: ${heading.textContent}`);

  const elements = item.querySelectorAll('li');
  console.log(`Elements: ${elements.length}`);
});
