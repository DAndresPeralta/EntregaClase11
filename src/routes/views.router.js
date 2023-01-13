import express from "express";
import utils from "../utils.js";

const router = express.Router();
let p = [];

router.get("/", (req, res) => {
    console.log("Desde el servidor");
    p = utils.products;
    const e = {
        products: p
    };
    res.render("home", e);
});

router.get("/realtimeproducts", (req, res)=>{
    console.log("From Server");
    p = utils.products
    const e ={
        products:p
    };
    res.render("realTimeProducts", e);
});

export default router;