

// {
//     "category_id": "1001",
//     "category": "Music"
// }

const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories));
}

function displayCategory(data) {
    for (const cat of data) {
        console.log(cat.category)

        const categoryBtnContainer = document.getElementById('category-btn-container');

        const catBtn = document.createElement('div')
        catBtn.innerHTML = `
            <button class="btn btn-sm">${cat.category}</button>
        `
        categoryBtnContainer.append(catBtn)
    }

}

loadCategory()
