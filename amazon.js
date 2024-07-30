document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', price: '$20', image: 'path/to/image2.jpg' },
        // Add more products as needed
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100" height="100">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
});
