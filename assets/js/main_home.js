// Declare variable
var carts = [];

var categories = [
    {
        id: 1,
        name: 'Truyện tranh',
    },
    {
        id: 2,
        name: 'Kinh tế',
    },
    {
        id: 3,
        name: 'Xã hội',
    },
    {
        id: 4,
        name: 'Văn hóa - Chính trị',
    },
    {
        id: 5,
        name: 'Ngoại ngữ',
    },
    {
        id: 6,
        name: 'Công nghệ',
    },
    {
        id: 7,
        name: 'Lập trình',
    }
];

var books = [
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    }
]

// Set action for search box
function loadCategory() {
    var cateDOM = document.querySelector('.app-header-main-search-filter__choose');
    cateDOM.innerHTML = '<li class="app-header-main-search-filter-choose__item active-color" onclick="categoryChange(-1, 0)">Tất cả</li>';

    categories.forEach(function (value, index) {
        cateDOM.innerHTML += `<li class="app-header-main-search-filter-choose__item" onclick="categoryChange(${index}, ${value.id})">${value.name}</li>`;
    });
}

function categoryChange(index, id) {
    var cateList = document.querySelectorAll('.app-header-main-search-filter-choose__item').forEach(function (value) {
        if (value.classList.contains('active-color')) {
            value.classList.remove('active-color');
        }
    });
    var dom = document.querySelector(`.app-header-main-search-filter-choose__item:nth-child(${index + 2})`);
    dom.classList.add('active-color');

    var textDOM = document.querySelector('.app-header-main-search-filter__current > p');
    textDOM.innerHTML = dom.innerHTML;

    document.querySelector('#id-cate').value = id;
}

// Set action for add to cart
function addToCart(id) {
    var hasCart = carts.find(function(value) {
        return value.id == id;
    });
    if(hasCart) {
        hasCart.quantity += 1;
        showToast({
            message: `Số lượng sách trong giỏ hàng vừa được tăng thêm 1 : ${hasCart.name}`,
            type: 'info',
            duration: 2000
        });
    }
    else {
        var newCart = books.find(function(value) {
            return value.id == id;
        });
        carts.push({
            id: newCart.id,
            name: newCart.name,
            author: newCart.author,
            image: newCart.image,
            currentPrice: newCart.currentPrice,
            quantity: 1
        });
        showToast({
            message: `Bạn đã thêm vào giỏ hàng sách: ${newCart.name}`,
            type: 'success',
            duration: 2000
        });
    }
    loadCart();
}

function removeFromCart(id) {
    var cart = books.find(function(value) {
        return value.id == id;
    });
    carts = carts.filter(function(value) {
        return value.id != id;
    });
    showToast({
        message: `Bạn vừa xóa trong giỏ hàng sách : ${cart.name}`,
        type: 'error',
        duration: 2000
    });
    loadCart();
}

function loadCart() {
    var cartDOM = document.getElementById('cart-list');
    cartDOM.innerHTML = `
    <span class="material-icons-outlined">shopping_cart</span>
    <a href="#" class="number-books-cart">${carts.length}</a>
    <div class="app-header-main-cart__list">
        <h2>Sách trong giỏ hàng</h2>
        <h2 class="header-main-no-cart__text">Giỏ hàng trống</h2>
        <div class="header-main-no-cart__img">
            <img src="./assets/images/empty-cart.png" alt="empty-cart">
        </div>
        <ul class="app-header-main-cart__list-list"></ul>
        <div class="app-header-main-cart__view-cart">
            <a href="#">Đi tới giỏ hàng</a>
        </div>
    </div>
    `;

    if(carts.length > 0) {
        if(cartDOM.classList.contains('header-main--no-cart')) {
            cartDOM.classList.remove('header-main--no-cart');
        }

        var cartListDOM = document.querySelector('.app-header-main-cart__list-list');
        cartListDOM.innerHTML = '';

        carts.forEach(function(value) {
            var item = document.createElement('li');
            item.classList.add('app-header-main-cart-list__item');
            
            item.innerHTML = `
            <div class="app-header-main-cart-list-item__img">
                <img src="${value.image}" alt="">
            </div>
            <div class="app-header-main-cart-list-item__info">
                <div>${value.name}</div>
                <p>${value.author}</p>
                <span onclick="removeFromCart(${value.id})">Xóa</span>
            </div>
            <div class="app-header-main-cart-list-item__price">
                <h4>${value.currentPrice}</h4>
                <p>${value.quantity}</p>
            </div>
            `;
            cartListDOM.append(item);
        });
    }
    else {
        if(!cartDOM.classList.contains('header-main--no-cart')) {
            cartDOM.classList.add('header-main--no-cart');
        }
    }
}

// Render data books
function renderBooks() {
    books.map(function (value) {
        value.currentPrice = new Intl.NumberFormat().format(value.currentPrice);
        value.oldPrice = new Intl.NumberFormat().format(value.oldPrice);
        value.sale = value.sale + '%';

        return value;
    });

    var listBooksDOM = document.querySelector('.app-content-books__list');
    listBooksDOM.innerHTML = '';
    var row = document.createElement('div');
    row.classList.add('row');

    books.forEach(function (value, index) {
        var col = document.createElement('div');
        col.classList.add('col', 'l-2-4', 'm-6', 'c-12');
        col.style.position = 'relative';

        col.innerHTML = `
        <div class="app-content-books__container">
            <a href="#" class="app-content-books__item">
                <div class="app-content-books-item__img">
                    <img src="${value.image}"
                        alt="">
                </div>
                <div class="app-content-books-item__info">
                    <div class="app-content-books-item-info__name">${value.name}</div>
                    <div class="app-content-books-item-info__author">${value.author}</div>
                    <div class="app-content-books-item-info__price">
                        <div class="app-content-books-item-info__price-current">${value.currentPrice}</div>
                        <div class="app-content-books-item-info__price-old">${value.oldPrice}</div>
                        <div class="app-content-books-item-info__price-sale">-${value.sale}</div>
                    </div>
                </div>
            </a>
            <div class="app-content-books__pop-up">
                <div class="app-content-books-pop-up__name">${value.name}</div>
                <div class="app-content-books-pop-up__author">${value.author}</div>
                <div class="app-content-books-pop-up__price">
                    <div class="app-content-books-pop-up__price-current">${value.currentPrice}</div>
                    <div class="app-content-books-pop-up__price-old">${value.oldPrice}</div>
                </div>
                <div class="app-content-books-pop-up__sale">Giảm giá: ${value.sale}</div>
                <div class="app-content-books-pop-up__btn">
                    <span onclick="addToCart(${value.id})">Thêm vào giỏ hàng</span>
                </div>
                <div class="app-content-books-pop-up__btn">
                    <a href="#">Xem chi tiết</a>
                </div>
            </div>
        </div>
        `;

        row.append(col);
    });

    listBooksDOM.append(row);    
}

// Call function
loadCategory();
renderBooks();
loadCart();