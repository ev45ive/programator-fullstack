import express from "express";
import { Cart, insertToDB } from "../models/cart.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  Cart.find({
    user_name: {
      $regex: req.query.user_name || "",
    },
  })
    .limit(10)
    .then((products) => {
      res.send(products);
    });
});

routes.post("/", (req, res) => {
  Product.insertMany({
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    product_id: req.body.product_id,
    date_of_add: Date.now,
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send("product added to database");
  console.log(
    req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl
  );
  // console.log(product);
});



routes.get("/init", (req, res) => {
  InitCart().then(() => {
    res.send("cart initialization done");
  });
});

routes.get("/insert", (req, res) => {
  insertToDB().then(() => {
    res.send("cart initialization done");
  });
});

routes.get("/delete", (req, res) => {
  Cart.deleteMany().then(() => {
    res.send("cart list deleted");
  });
});







export default routes;
