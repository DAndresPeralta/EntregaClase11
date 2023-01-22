import express from "express";
import { FileManager, ProductFileManager } from "../classes/fileManager.js";
import path from "path";

const router = express.Router();

const fileManager = new FileManager(path.resolve(process.cwd(), "public", "../public/products.json"));
const productFileManager = new ProductFileManager(path.resolve(process.cwd(), "public", "../public/products.json"));

router.get("/", async (req, res) => {
    const products = await fileManager.getAll();
    res.render("home", { products });
});

router.get("/realTimeProducts", async (req, res) => {
    console.log("Entro");
    const products = await fileManager.getAll();
    res.render("realTimeProducts", { products });
});

router.post("/realTimeProducts", async (req, res) => {
    const newProduct = req.body;
    await productFileManager.addElement(newProduct);
    res.redirect("/realTimeProducts");
});

router.delete("/realTimeProducts", async (req, res) => {
    const id = req.body.id;
    await productFileManager.deleteElement(id);
    res.redirect("/realTimeProducts");
})

export default router;