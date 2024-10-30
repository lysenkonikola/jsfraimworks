products.js
let products = [
    {
        id: 1,
        name: "ігристе",
        category: "вино",
        image: "shopping-8.jpeg",
        price: 400
    },
    {
        id: 2,
        name: "напівсолодке",
        category: "вино",
        image: "shopping7.jpeg",
        price: 600
    },
    {
        id: 3,
        name: "нефільтроване",
        category: "пиво",
        image: "shopping-5.jpeg",
        price: 350
    },
    {
        id: 4,
        name: "темне",
        category: "пиво",
        image: "shopping-4.jpeg",
        price: 1000
    },
    {
        id: 5,
        name: "світле",
        category: "пиво",
        image: "shopping-3.jpeg",
        price: 650
    },
    {
        id: 6,
        name: "біле",
        category: "вино",
        image: "shopping.jpeg",
        price: 440
    }
];

function loadProducts(category) {
    let container = document.getElementById("products-container");
    let productsHtml = '';
    products.filter(elem => !category || elem.category === category).forEach(elem => {
        productsHtml += `
            <div class="col">
                <div class="card h-100 card__elem" id="product-${elem.id}">
                    <img src="${elem.image}" class="card-img-top" alt="${elem.name}">
                    <div class="card-body">
                        <h5 class="card-title">${elem.name}</h5>
                        <p class="card-text">Ціна: ${elem.price} грн</p>
                        <button onclick="addProductToCart(${elem.id})" class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>`;
    });
    container.innerHTML = productsHtml;
}

function addProductToCart(productId) {
    let product = products.find(item => item.id === productId);
    if (product) {
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        let existingItem = cartItems.find(item => item.id === productId);
        if (!existingItem) {
            cartItems.push({ id: productId, quantity: 1 });
        } else {
            existingItem.quantity += 1;
        }
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    openCart(); // Оновлення відображення кошика
}

function showCart() {
    let cart = new bootstrap.Modal(document.getElementById("cart"), {});
    cart.show();
}

function closeCart() {
    let cart = document.getElementById("cart");
    cart.style.display = "none";
}

// Відкриває кошик і відображає його вміст
function openCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let containerHtml = '';
    let summ = 0;

    cartItemsData.forEach(cartItem => {
        let product = products.find(product => product.id === cartItem.id);
        if (product) {
            containerHtml += `<div class="cart-item" id="cart-item-${product.id}">
                <div class="cart-item-name">
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">
                </div>
                <div class="cart-item-content">
                    <p>Кількість: <button onclick="decreaseQuantity(${product.id})">-</button> ${cartItem.quantity} <button onclick="increaseQuantity(${product.id})">+</button></p>
                    <p>Ціна за одиницю: ${product.price} грн</p>
                    <p>Всього: ${product.price * cartItem.quantity} грн</p>
                    <button onclick="removeItem(${product.id})">Видалити</button>
                </div>
            </div>`;
            summ += product.price * cartItem.quantity;
        }
    });

    containerHtml += `<div class="cart-item">
                <div class="cart-item-name">
                    <h3>Загальна сума:</h3>
                </div>
                <div class="cart-item-content">
                    <p>${summ} грн</p>
                </div>
            </div>`;

    cartItemsContainer.innerHTML = containerHtml;
}


function decreaseQuantity(productId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let item = cartItems.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cartItems = cartItems.filter(item => item.id !== productId);
    }
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    openCart();
}


function increaseQuantity(productId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    let item = cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
    }
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    openCart();
}

function removeItem(productId) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== productId);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    openCart();
}
