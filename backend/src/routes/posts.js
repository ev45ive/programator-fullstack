import express from "express";
import { Post, InitPosts } from "../models/posts.js"

const routes = express.Router({});

//find all by title, or display all 
routes.get("/", (req, res) => {
    Post.find({
        title: {
            $regex: req.query.title || ""
        },
    })
        .limit(10)
        .then((post) => {
            res.send(post);
        });
});

// find first One by title
routes.get("/one", (req, res) => {
    Post.findOne({
        title: {
            $regex: req.query.title || ""
        },
    })
        .limit(10)
        .then((post) => {
            res.send(post);
        });
});

//find by EAN number
routes.get("/EAN", (req, res) => {
    // Post.findById("5f12e85f48534b303c09e539")
    Post.find({
        EAN: {
            $regex: req.query.EAN || ""
        },
    })
        .limit(10)
        .then((post) => {
            res.send(post);
        });
});

//delete
routes.get("/del", (req, res) => {
    Post.findOneAndDelete({ title: {$regex: req.query.title || ""} },
        function (err) { }).then(() => {
            res.send("Post deleted")
        });
});

//add
routes.get("/init", (req, res) => {
    InitPosts().then(() => {
        res.send("Done")
    });
});
export default routes