// Declare variable
var carts = [
    {
        author: "Emma Thompson",
        currentPrice: "63,500",
        id: 1,
        image: "./assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png",
        name: "Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)",
        quantity: 1
    },
    {
        author: "Emma Thompson",
        currentPrice: "63,500",
        id: 2,
        image: "./assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png",
        name: "Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)",
        quantity: 2
    }
];

// Load list cart
function loadListCart() {
    var cartListDOM = document.querySelector('.app-content-cart-list__list');
    cartListDOM.innerHTML = '';
    
    carts.forEach(function(value) {
        var cartDOM = document.createElement('div');
        cartDOM.classList.add('app-content-cart-list__item');

        cartDOM.innerHTML = `
        <div class="app-content-cart-list-item__img">
            <img src="${value.image}" alt="">
        </div>
        <div class="app-content-cart-list-item__body">
            <div class="app-content-cart-list-item-body__name">${value.name}</div>
            <div class="app-content-cart-list-item-body__author">${value.author}</div>
            <span class="app-content-cart-list-item-body__remove">Xóa</span>
        </div>
        <div class="app-content-cart-list-item__price">${value.currentPrice}</div>
        <div class="app-content-cart-list-item__quantiy">
            <div class="app-content-cart-list-item-quantiy__down">-</div>
            <div class="app-content-cart-list-item-quantiy__input">
                <input type="text" value="${value.quantity}">
            </div>
            <div class="app-content-cart-list-item-quantiy__up">+</div>
        </div>
        `;

        cartListDOM.appendChild(cartDOM);
    });
}

loadListCart();