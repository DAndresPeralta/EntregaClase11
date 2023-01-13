const socket = io();

const p1 = {
    id: 6,
    title: "Producto 6",
    description: "Este es un producto prueba",
    price: 550,
    thumbnail: "Imagen no disponible",
    code: "qeg421",
    stock: 75
}

socket.emit("message", p1);