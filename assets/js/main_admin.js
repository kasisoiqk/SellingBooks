// Declare variable
var books = [
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500,
        description: 'Không có'
    }
];

// Format book's id
function formatBookID(id) {
    var tmp = id;
    var count = 0;
    while(tmp > 0) {
        count++;
        tmp = (tmp - tmp%10)/10;
    }
    while(4 - count > 0) {
        id = '0' + id;
        count++;
    }
    return id;
}


// Show modal input
function showEdit(id) {
    var book = books.find(function(value) {
        return value.id = id;
    });

    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.remove('modal__input-create');
    }
    if(!modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.add('modal__input-edit');
    }

    document.getElementById('book-name').value = book.name;
    document.getElementById('book-author').value = book.author;
    document.getElementById('book-cate').value = 3;
    document.getElementById('book-current-price').value = book.currentPrice;
    document.getElementById('book-old-price').value = book.oldPrice;
    document.getElementById('book-sale').value = book.sale;
    document.getElementById('book-quantity').value = book.quantity;
    document.getElementById('book-description').value = book.description;
}

function showCreate() {
    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.remove('modal__input-edit');
    }
    if(!modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.add('modal__input-create');
    }

    document.getElementById('book-name').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-cate').value = '';
    document.getElementById('book-current-price').value = '';
    document.getElementById('book-old-price').value = '';
    document.getElementById('book-sale').value = '';
    document.getElementById('book-quantity').value = '';
    document.getElementById('book-description').value = '';
}

// load list books
function loadListBooks() {
    var listBooksDOM = document.querySelector('.app-container-content__list tbody');
    listBooksDOM.innerHTML = '';

    books.forEach(function(value) {
        var book = document.createElement('tr');

        book.innerHTML = `
        <td>SA${formatBookID(value.id)}</td>
        <td>
            <div class="app-container-content__item-img">
                <img src="${value.image}" alt="">
            </div>
        </td>
        <td>
            <div class="app-container-content__item-name">${value.name}</div>
            <div class="app-container-content__item-author">${value.author}</div>
            <div class="app-container-content__item-category">Truyện thiếu nhi</div>
        </td>
        <td>
            <div class="app-container-content__item-current-price">${new Intl.NumberFormat().format(value.currentPrice)}đ</div>
            <div class="app-container-content__item-old-price">${new Intl.NumberFormat().format(value.oldPrice)}đ</div>
            <div class="app-container-content__item-sale">-${value.sale}%</div>
        </td>
        <td style="white-space: nowrap;">${value.quantity} quyển</td>
        <td>
            <label for="cbo-show-modal" class="app__btn" onclick="showEdit(${value.id})">Chi tiết</label>
        </td>
        `;

        listBooksDOM.appendChild(book);
    });
}

// Call function
loadListBooks();