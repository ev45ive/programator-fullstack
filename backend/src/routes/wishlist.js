import express from "express";
import {
  getAllWishlists,
  getOneWishlist,
  createWishlist,
  updateWishlist,
  deleteWishlist
} from "../services/wishlist.js";

const routes = express.Router({});

routes.get("/", async (req, res) => {
  const wishlists = await getAllWishlists({
    name: req.query.name,
    limit: parseInt( req.query.limit),
    page:  parseInt(req.query.page),
  });

  res.send(wishlists);
});

routes.get("/:wishlist_id", async (req, res) => {
  const { wishlist_id } = req.params;

  const result = await getOneWishlist({ id: wishlist_id });

  res.send(result);
});

routes.post("/", async (req, res) => {
  const { name, products} = req.body;

  const result = await createWishlist({
    name,
    products
  });

  res.send(result);
});

//update
routes.put("/:wishlist_id", async (req, res) => {
  const { name, products } = req.body;

  const result = await updateWishlist({
    id: wishlist_id,
    name,
    products
  });

  res.send(result);
});


routes.delete("/:wishlist_id", async (req, res) => {
  const {wishlist_id} = req.params
  const result = await deleteWishlist({wishlist_id})
  res.send(result)
})


export default routes;