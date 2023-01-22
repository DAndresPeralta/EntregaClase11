import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import { ProductFileManager } from "./classes/fileManager.js";
import viewsRouter from "./routes/views.router.js";
import path from "path";
import methodOverride from "method-override";

// Inicializamos express, HTTP y socket.
const app = express();

const httpServer = app.listen(3000, () => console.log("Server running on port 3000"));

const socketServer = new Server(httpServer);

// Configuracion de ???
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use("/", viewsRouter);

//Websocket: hacemos la conexion del lado del servidor.
socketServer.on("connection", (socket) => {
    console.log("Cliente vinculado.");

    socketServer.on("ProductoAgregado", (data) => {
        const productFileManager = new ProductFileManager(
            path.resolve(process.cwd(), "public", "../public/products.json")
        );
        productFileManager.writeAll(data);
    });

    socketServer.on("productoEliminado", (data) => {
        const productFileManager = new ProductFileManager(
            path.resolve(process.cwd(), "public", "../public/products.json")
        );
        productFileManager.writeAll(data);
    });

})