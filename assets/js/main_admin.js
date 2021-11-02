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
        quantity: 500
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
        quantity: 500
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
        quantity: 500
    }
]


// Show modal input
function showEdit() {
    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.remove('modal__input-create');
    }
    if(!modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.add('modal__input-edit');
    }
}

function showCreate() {
    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.remove('modal__input-edit');
    }
    if(!modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.add('modal__input-create');
    }
}

// load list books
function loadListBooks() {
    books.map(function (value) {
        value.currentPrice = new Intl.NumberFormat().format(value.currentPrice);
        value.oldPrice = new Intl.NumberFormat().format(value.oldPrice);
        value.sale = value.sale + '%';

        return value;
    });

    var listBooksDOM = document.querySelector('.app-container-content__list tbody');
    listBooksDOM.innerHTML = '';

    books.forEach(function(value) {
        var book = document.createElement('tr');

        book.innerHTML = `
        <td>SA001</td>
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
            <div class="app-container-content__item-current-price">${value.currentPrice}đ</div>
            <div class="app-container-content__item-old-price">${value.oldPrice}đ</div>
            <div class="app-container-content__item-sale">-${value.sale}</div>
        </td>
        <td style="white-space: nowrap;">${value.quantity} quyển</td>
        <td>
            <label for="cbo-show-modal" class="app__btn" onclick="showEdit()">Chi tiết</label>
        </td>
        `;

        listBooksDOM.appendChild(book);
    });
}

// Call function
loadListBooks();