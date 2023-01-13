import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";
import utils from "./utils.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));
app.use("/views", viewsRouter);

app.get("/1", (req, res) => {
    let p = utils.products;
    // console.log(p);
    const e = {
        products: p
    };
    res.render("home", e);
});

app.get("/2", (req, res) => {
    const p = {
        id: 5,
        j: "Producto 5",
        description: "Este es un producto prueba",
        price: 550,
        thumbnail: "Imagen no disponible",
        code: "qeg421",
        stock: 75
    };
    console.log(p);
    res.render("home", p);
});

app.post("/msn", (req, res) => {
    const { message } = req.body;
    socketServer.emit("message", message);
    res.send("ok");
});

const httpServer = app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
})

const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado");
    // socket.emit("message", "Hola desde el servidor.")
    socket.on("message", data => {
        // messages.push(data);
        // console.log({ longitud: messages.length, data: messages })
        console.log(data);
        utils.addProduct(data);
    })
});