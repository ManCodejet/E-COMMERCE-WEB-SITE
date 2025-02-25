const BaseUrl = 'https://fakestoreapi.com';

const categoryName = localStorage.getItem("selectedCategory").toLowerCase();

async function getCategoryDetails() {
    try {
        const response = await fetch(`${BaseUrl}/products/category/${categoryName}`);
        const products = await response.json();
        console.log(products)

        const productList = document.querySelector('.product-list');
        productList.innerHTML = '';

        products.slice(0, -1).forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="texts">
                    <p>${product.title}</p>
                    <p>GH$ ${product.price}</p>
                    <p><s>GH$ ${(product.price * 1.5).toFixed(2)}</s></p>
                    <p>${Math.floor(Math.random() * 20) + 1} items left</p>
                </div>
            `;

            productList.appendChild(productDiv);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}
getCategoryDetails();