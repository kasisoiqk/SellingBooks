// Declare variable
var idNguoiGui = 1;
var idNguoiNhan = 2;

var messages = [
    {
        id: 1,
        id_nguoigui: 1,
        id_nguoinhan: 2,
        noi_dung: 'Xin chào'
    },
    {
        id: 2,
        id_nguoigui: 1,
        id_nguoinhan: 2,
        noi_dung: 'Tôi là Khánh'
    },
    {
        id: 3,
        id_nguoigui: 2,
        id_nguoinhan: 1,
        noi_dung: 'Chào'
    },
    {
        id: 4,
        id_nguoigui: 2,
        id_nguoinhan: 1,
        noi_dung: 'Tôi là Duyên'
    },
    {
        id: 5,
        id_nguoigui: 2,
        id_nguoinhan: 1,
        noi_dung: 'Tôi có một vấn đề muốn hỏi bạn... Tôi có một vấn đề muốn hỏi bạn... Tôi có một vấn đề muốn hỏi bạn... Tôi có một vấn đề muốn hỏi bạn...'
    },
    {
        id: 6,
        id_nguoigui: 1,
        id_nguoinhan: 2,
        noi_dung: 'Okey'
    },
];

// Load Message
function loadMessage() {
    var messageDOM = document.querySelector('.app-content-body-message__read');
    messageDOM.innerHTML = '';

    messages.forEach(function(value) {
        var message = document.createElement('div');
        message.classList.add('app-content-body-message-read__item');
        message.innerHTML = `<span>${value.noi_dung}</span>`;
        
        if(value.id_nguoigui == idNguoiGui) {
            message.classList.add('message-reply');
        }

        messageDOM.append(message);
    });
}

// Call function
loadMessage();