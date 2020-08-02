import express from "express";
// import { Post, InitPosts } from "../models/posts.js"
import { createPosts, getAllPosts, deletePost } from "../services/posts.js";
import { InitPosts } from "../models/posts.js";

const routes = express.Router({});

routes.get("/", async (req, res) => {
    let posts = await getAllPosts({
        title: req.query.title,
        limit: parseInt(req.query.limit),
        page: parseInt(req.query.page),
    });
    res.send(posts)
});

routes.post("/", async (req, res) => {
    const { EAN, title, image, body } = req.body;

    const result = await createPosts({
        EAN,
        title,
        image,
        body,
    });
    res.send(result)
});

routes.get("/init", (req, res) => {
    InitPosts().then(() => {
        res.send("OK")
    }).then(() => console.log("OK"));
});


//delete
routes.delete("/:post_id", async (req, res) => {
    const { post_id } = req.params
    const result = await deletePost(
        { post_id })
    res.send(result)
});

//find all by title, or display all 
// routes.get("/", (req, res) => {
//     Post.find({
//         title: {
//             $regex: req.query.title || ""
//         },
//     })
//         .limit(10)
//         .then((post) => {
//             res.send(post);
//         });
// });

// find first One by title
// routes.get("/one", (req, res) => {
//     Post.findOne({
//         title: {
//             $regex: req.query.title || ""
//         },
//     })
//         .limit(10)
//         .then((post) => {
//             res.send(post);
//         });
// });


//find by EAN number
// routes.get("/:EAN", (req, res) => {
//     // Post.findById("5f12e85f48534b303c09e539")
//     Post.find({
//         EAN: {
//             $regex: req.params.EAN || ""
//         },
//     })
//         .limit(10)
//         .then((post) => {
//             res.send(post);
//         });
// });

//delete
// routes.get("/del", (req, res) => {
//     Post.findOneAndDelete({ title: {$regex: req.query.title || ""} },
//         function (err) { }).then(() => {
//             res.send("Post deleted")
//         });
// });

//add
// routes.get("/init", (req, res) => {
//     InitPosts().then(() => {
//         res.send("Done")
//     });
// });
export default routes