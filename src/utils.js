export const products = [
    {
        id: 1,
        title: "Producto 1",
        description: "Este es un producto prueba",
        price: 550,
        thumbnail: "Imagen no disponible",
        code: "qwe456",
        stock: 75
    },
    {
        id: 2,
        title: "Producto 2",
        description: "Este es un producto prueba",
        price: 550,
        thumbnail: "Imagen no disponible",
        code: "uhv642",
        stock: 75
    },
    {
        id: 3,
        title: "Producto 3",
        description: "Este es un producto prueba",
        price: 550,
        thumbnail: "Imagen no disponible",
        code: "bxa378",
        stock: 75
    },
    {
        id: 4,
        title: "Producto 4",
        description: "Este es un producto prueba",
        price: 550,
        thumbnail: "Imagen no disponible",
        code: "irw135",
        stock: 75
    },
    {
        id: 5,
        title: "Producto 5",
        description: "Este es un producto prueba",
        price: 550,
        thumbnail: "Imagen no disponible",
        code: "qeg421",
        stock: 75
    },
];

function addProduct(e) {
    console.log("Dentro funcion");
    console.log(e);
    products.push(e);
    console.log(products);
}

export default { products, addProduct };