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

// find first One
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

// routes.get("/_id", (req, res) => {
//     Post.findOne({
//         _id: {
//             $regex: req.query._id || ""
//         },
//     })
//         .limit(10)
//         .then((post) => {
//             res.send(post);
//         });
// });

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