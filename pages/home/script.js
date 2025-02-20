const BaseUrl = 'https://fakestoreapi.com';

async function getProducts() {
    try {
        const response = await fetch(`${BaseUrl}/products`);
        const products = await response.json();

        const productList = document.querySelector('.products-list');
        productList.innerHTML = '';

        products.slice(0, 20).forEach(product => {
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
getProducts();


function checkProductId() {
    const currentProducts = document.querySelector('.products-list').addEventListener('click', (e) => {
        window.location.href = "/pages/product-details/details.html"
    })
}
checkProductId();