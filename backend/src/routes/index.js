import express from "express";
import orders from './orders.js';
import cart from "./cart.js";
import users from "./users.js";
import products from './products.js'
import wishlist from "./wishlist.js";

const routes = express.Router({});


const HOST = process.env.HOST;

routes.get("/", (req, res) => {
  res.send("Hello API!");
  console.log(req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl)
});

routes.use('/orders', orders)
routes.use("/cart", cart);
routes.use('/products', products)
routes.use("/wishlist", wishlist);
routes.use("/users", users);

export default routes;