import express from "express";
import { updateCart } from "../services/cart.js";
import { Cart } from "../models/cart.js";
import mongoose from "mongoose";

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const { user } = req;
  if (user) {
    let cart = await Cart.findOne({ userId: user._id });
    res.send(cart);
  } else {
    res.send({
      session: req.session.cart || { items: [] },
    });
  }
});

routes.post("/update", async (req, res) => {
  const { action, product_id, amount = 1 } = req.body;
  const { user } = req;

  if (user) {
    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      cart = new Cart({ userId: user.id, items: [] });
    }
    updateCart({
      cart,
      action,
      product_id,
      //   product_id: mongoose.Types.ObjectId(product_id),
      amount,
    });

    const result = await cart.save();
    res.send(result);
  } else {
    try {
      const cart = (req.session.cart = req.session.cart || { items: [] });

      updateCart({ cart, action, product_id, amount });

      res.send(cart);
    } catch (e) {
      res.send({ error: e.message });
    }
  }
});

export default routes;

/* 
// CORS
await fetch('http://localhost:8080/api/cart/update',{
    method:'POST',
    credentials:'include',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        action:'add',
        product_id:1, amount:1
    })
}).then(r=>r.json())


*/
