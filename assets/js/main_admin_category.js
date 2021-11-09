// Declare variable
var categories = [
    {
        id: 1,
        ten_danhmuc: 'Truyện tranh'
    },
    {
        id: 2,
        ten_danhmuc: 'Văn học'
    },
    {
        id: 1,
        ten_danhmuc: 'Truyện tranh'
    },
    {
        id: 2,
        ten_danhmuc: 'Văn học'
    },
    {
        id: 1,
        ten_danhmuc: 'Truyện tranh'
    },
    {
        id: 2,
        ten_danhmuc: 'Văn học'
    },
    {
        id: 1,
        ten_danhmuc: 'Truyện tranh'
    },
    {
        id: 2,
        ten_danhmuc: 'Văn học'
    }
];

// Format categories's id
function formatCateID(id) {
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
    var cate = categories.find(function(value) {
        return value.id == id;
    });

    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.remove('modal__input-create');
    }
    if(!modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.add('modal__input-edit');
    }

    document.getElementById('cate-name').value = cate.ten_danhmuc;
}

function showCreate() {
    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.remove('modal__input-edit');
    }
    if(!modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.add('modal__input-create');
    }

    document.getElementById('cate-name').value = '';
}

// load list categories
function loadListCates() {
    var listCatesDOM = document.querySelector('.app-container-content__list tbody');
    listCatesDOM.innerHTML = '';

    categories.forEach(function(value) {
        var book = document.createElement('tr');

        book.innerHTML = `
        <td>DA${formatCateID(value.id)}</td>
        <td>${value.ten_danhmuc}</td>
        <td style="text-align: center;">
            <label for="cbo-show-modal" class="app__btn" onclick="showEdit(${value.id})">Chi tiết</label>
        </td>
        `;

        listCatesDOM.appendChild(book);
    });
}

// Call function
loadListCates();