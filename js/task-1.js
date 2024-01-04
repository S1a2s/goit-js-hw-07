
const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItems.length);
categoriesItems.forEach((categoryItem) => {
    const categoryTitle = categoryItem.firstElementChild.textContent;
    const categoryElements = categoryItem.lastElementChild.children;
    console.log('Category:', categoryTitle);
    console.log('Elements:', categoryElements.length);
});
