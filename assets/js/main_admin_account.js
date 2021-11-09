// Declare variable
var users = [
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    },
    {
        id: 1,
        ho_ten: 'Nguyễn Thị Thùy Duyên',
        ngay_sinh: '10/04/2001',
        gioi_tinh: 0,
        sdt: '0192019210',
        email: 'thuyduyen@gmail.com',
        id_taikhoan: 1,
        username: 'thuyduyen',
        password: '12345',
        phan_quyen: 'USER'
    }
];

// Format user's id
function formatUserID(id) {
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
    var user = users.find(function(value) {
        return value.id == id;
    });

    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.remove('modal__input-create');
    }
    if(!modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.add('modal__input-edit');
    }

    document.getElementById('user-name').value = user.name;
    document.getElementById('user-author').value = user.author;
    document.getElementById('user-cate').value = 3;
    document.getElementById('user-current-price').value = user.currentPrice;
    document.getElementById('user-old-price').value = user.oldPrice;
    document.getElementById('user-sale').value = user.sale;
    document.getElementById('user-quantity').value = user.quantity;
    document.getElementById('user-description').value = user.description;
}

function showCreate() {
    var modalDOM = document.querySelector('.modal__input');

    if(modalDOM.classList.contains('modal__input-edit')) {
        modalDOM.classList.remove('modal__input-edit');
    }
    if(!modalDOM.classList.contains('modal__input-create')) {
        modalDOM.classList.add('modal__input-create');
    }

    document.getElementById('user-name').value = '';
    document.getElementById('user-author').value = '';
    document.getElementById('user-cate').value = '';
    document.getElementById('user-current-price').value = '';
    document.getElementById('user-old-price').value = '';
    document.getElementById('user-sale').value = '';
    document.getElementById('user-quantity').value = '';
    document.getElementById('user-description').value = '';
}

// load list users
function loadListUsers() {
    var listUsersDOM = document.querySelector('.app-container-content__list tbody');
    listUsersDOM.innerHTML = '';

    users.forEach(function(value) {
        var user = document.createElement('tr');

        user.innerHTML = `
        <td>ND${formatUserID(value.id)}</td>
        <td>
            <div class="app-container-content__item-user">
                <img src="./assets/images/user.png" alt="user">
                <p>${value.ho_ten}</p>
            </div>
        </td>
        <td>
            <div class="app-container-content__item-user-info">Ngày sinh: ${value.ngay_sinh}</div>
            <div class="app-container-content__item-user-info">${value.gioi_tinh}</div>
            <div class="app-container-content__item-user-info">Số điện thoại: ${value.sdt}</div>
            <div class="app-container-content__item-user-info">Email: ${value.email}</div>
        </td>
        <td>ND${formatUserID(value.id_taikhoan)}</td>
        <td>${value.username}</td>
        <td>${value.password}</td>
        <td style="color: var(--red-color);">${value.phan_quyen}</td>
        <td style="text-align: center;">
            <label for="cbo-show-modal" class="app__btn" onclick="showEdit(${value.id})">Chi tiết</label>
        </td>
        `;

        listUsersDOM.appendChild(user);
    });
}

// Call function
loadListUsers();