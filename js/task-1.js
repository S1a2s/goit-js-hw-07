
const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItems.length);
categoriesItems.forEach((categoryItem) => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('ul li');
    console.log('Category:', categoryTitle);
    console.log('Elements:', categoryElements.length);
});
