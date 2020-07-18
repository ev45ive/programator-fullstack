import mongoose from "mongoose";

export const postSchema = mongoose.Schema({
    title: String,
    body: {type: String, required: true},
    comment: String,
});

export const Post = mongoose.model("Post", postSchema);

export const InitPosts = () => {
    const post1 = new Post({
        title: "First post",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        comment: "the best post"
    });
    const post2 = new Post({
        title: "Second post",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        comment: "I like it"
    });

    return Promise.all([
        post1.save().then(() => console.log("here I am", post1)),
        post2.save().then(() => console.log("here I am", post2))
    ]);
};
