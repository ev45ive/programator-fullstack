import express from "express";
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
} from "../services/products.js";

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const products = await getAllProducts({
    name: req.query.name,
  });

  res.send(products);
});

routes.get("/:product_id", async (req, res) => {
  const { product_id } = req.params;

  const result = await getOneProduct({ id: product_id });

  res.send(result);
});

routes.post("/", async (req, res) => {
  const { name, description, price } = req.body;

  const result = await createProduct({
    name,
    description,
    price,
  });

  res.send(result);
});

/**
 * Update existing product
 */
routes.put("/:product_id", async (req, res) => {
  const { name, description, price } = req.body;

  const result = await updateProduct({
    id: product_id,
    name,
    description,
    price,
  });

  res.send(result);
});

/**
 * Seed database with demo products data
 */
routes.get("/init", (req, res) => {
  InitProducts().then(() => {
    res.send("done");
  });
});

export default routes;

// route2 = express.Router();

// // api / user / 123/ accounts / 34634 / product / 23423 / order / 234234
// // api / products / nested / param1 / param 2
// route2.get(":param2", (req, res) => {
//   const { param, param2 } = req.params;
// });

// // api / products / nested / param1
// routes.use("/nested/:param", routes);
