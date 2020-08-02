import { Post } from "../models/posts.js";

export const getAllPosts = async ({ title, limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;

    return Post.find({
        title: {
            $regex: title || "",
            // $optinos: "-i",
        },
    })
        .skip(skip)
        .limit(limit);
};

export const createPosts = async ({
    EAN, title, image, body }) => {
    const post = new Post({
        EAN,
        title,
        image,
        body
    });
    return post.save();
};

export const deletePost = async ({
    post_id }) => {
    const result = Post.deleteOne({
        _id: post_id
    });
    return result;
};

