// const BaseUrl = 'https://fakestoreapi.com';


// async function getProductById(id) {

//     let productInfo = document.querySelector('.product-info');

//     console.log(productInfo);


//     // if (!productInfo) {
//     //     console.error("Error: '.product-info' container not found in the DOM.");
//     //     return; // Stop execution if the container is missing
//     // }
    
//     // const response = await fetch(`${BaseUrl}/products/${id}`)
//     // const data = await response.json();

//     // console.log("data: ", data.title)

//     // const currentProduct = document.createElement('div');
//     // currentProduct.innerHTML = `
//     //     <img class="product-image" src="${data.image}" alt="chair">
//     //     <div class="details">
//     //         <h3 class="product-title">${data.title}</h3>
//     //         <div class="product-price">
//     //             <span>${data.price}</span>
//     //             <span>${data.rating}</span>
//     //         </div>
//     //         <span class="free-delivery">Free delivery to Accra</span>
//     //         <span class="add-button">
//     //             Add to cart
//     //         </span>
//     //     </div>
//     // `;

//     // productInfo.appendChild(currentProduct);
// }

// const productId = localStorage.getItem('productId');
// getProductById(productId)





document.addEventListener("DOMContentLoaded", function () {
    const BaseUrl = 'https://fakestoreapi.com';

    async function getProductById(id) {
        const productInfo = document.querySelector('.product-info');

        console.log(productInfo); // Should not be null anymore

        if (!productInfo) {
            console.error("Error: '.product-info' container not found in the DOM.");
            return;
        }

        const response = await fetch(`${BaseUrl}/products/${id}`);
        const data = await response.json();

        console.log("data: ", data.title);

        // const currentProduct = document.createElement('div');
        productInfo.innerHTML = `
            <img class="product-image" src="${data.image}" alt="chair">
            <div class="details">
                <h3 class="product-title">${data.title}</h3>
                <div class="product-price">
                    <span>${data.price}</span>
                    <span>Rating ${data.rating.rate}</span>
                </div>
                <span class="free-delivery">Free delivery to Accra</span>
                <span class="add-button">
                    Add to cart
                </span>
            </div>
        `;

        // productInfo.appendChild(currentProduct);
    }

    const productId = localStorage.getItem('productId');
    if (productId) {
        getProductById(productId);
    } else {
        console.error("No product ID found in localStorage.");
    }
});
