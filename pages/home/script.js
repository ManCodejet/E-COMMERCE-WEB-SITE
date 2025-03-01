const BaseUrl = 'https://fakestoreapi.com';

async function getProducts() {
    try {
        const response = await fetch(`${BaseUrl}/products`);
        const products = await response.json();

        const productList = document.querySelector('.products-list');
        productList.innerHTML = '';

        products.slice(0, -1).forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}" id="${product.id}">
                <div class="texts">
                    <p>${product.title}</p>
                    <p>GH$ ${product.price}</p>
                    <p><s>GH$ ${(product.price * 1.5).toFixed(2)}</s></p>
                    <p>${Math.floor(Math.random() * 20) + 1} items left</p>
                </div>
            `;
            productDiv.addEventListener('click', () => checkProductId(product.id))

            productList.appendChild(productDiv);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}
getProducts();


function checkProductId(id) {
    localStorage.setItem('productId', id)
    window.location.href = "/pages/product-details/details.html"
}


function getCategoryName() {
    const category = document.querySelector('.categories');

    if (!category) return;

    category.addEventListener('click', (e) => {
        const categoryName = e.target.textContent.trim();
        localStorage.setItem('selectedCategory', categoryName)
    });
}
getCategoryName()
