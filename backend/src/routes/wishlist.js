import express from "express";
import { WishList, InitWishList} from "../models/wishlist.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  WishList.find({
    name: { 
      $regex: req.query.name || ""
    },
  })
  .limit(10)
  .then((wishlists) => {
    res.send(wishlists);
  });
});

routes.get("/init", (req, res) => {
  InitWishList().then(() => {
    res.send("done");
  });
});

export default routes;