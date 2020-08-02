import express from "express";
import { updateCart } from "../services/cart.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send({
    session: req.session.cart,
  });
});

routes.post("/update", (req, res) => {
  const { action, product_id, amount = 1 } = req.body;
  try {
    const cart = (req.session.cart = req.session.cart || { items: [] });

    updateCart({ cart, action, product_id, amount });

    res.send(cart);
  } catch (e) {
    res.send({ error: e.message });
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
