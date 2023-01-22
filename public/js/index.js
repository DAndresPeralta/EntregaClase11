const socket = io();

const btn = document.getElementById("btn");
const btnDelete = document.getElementById("btn-delete");

const inputTitle = document.getElementById("Title");
const inputDesc = document.getElementById("Desc");
const inputPrice = document.getElementById("Price");
const inputCode = document.getElementById("Code");
const inputStock = document.getElementById("Stock");

const inputDelete = document.getElementById("id");

btn.addEventListener('click', (e) => {
    const title = inputTitle.value;
    const desc = inputDesc.value;
    const price = inputPrice.value;
    const code = inputCode.value;
    const stock = inputStock.value;

    if (title !== '' && price !== '') {
        socket.emit("productoAgregado", {
            "title": title,
            "desc": desc,
            "code": code,
            "price": price,
            "stock": stock
        });
    };
});

btnDelete.addEventListener('click', () => {
    const id = inputDelete.value;

    if (id !== '') {
        socket.emit("productoEliminado", {
            "id": id
        });
    };
});
