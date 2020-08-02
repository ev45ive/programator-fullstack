import express from "express";
import {
  registerUser,
  findUsers,
  logInUser,
  findUser,
} from "../services/users.js";
import passport from "passport";

const users = express.Router({});

users.get("/", async (req, res) => {
  const { limit, page } = req.query;
  const result = await findUsers({ limit, page });
  res.send(result);
});

users.get("/me", async (req, res) => {
  if (req.user) {
    res.send(await findUser({ id: req.user.id }));
  }else{
    res.send({error:'Not Logged in'})
  }
});

users.post("/register", async (req, res) => {
  try {
    const userData = req.body;
    const result = await registerUser({ user: userData });
    res.send(result);
  } catch (e) {
    res.send({ error: e.message });
  }
});

// users.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const result = await logInUser({ username, password });
//   res.send(result);
// });

// => config/passport.js
users.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect("/api/users/me"); // + req.user.username);
});

users.post("/confirmEmail", (req, res) => {
  res.send(["user 1"]);
});

users.post("/resetPassword", (req, res) => {
  res.send(["user 1"]);
});

users.get("/:user_id", (req, res) => {
  res.send(["user 1"]);
});

users.put("/:user_id", (req, res) => {
  res.send(["user 1"]);
});

export default users;
