import mongoose from "mongoose";

export const postSchema = mongoose.Schema({
    EAN: String,
    title: String,
    image: String,
    body: {type: String, required: true},
    comment: String,
});

let ean = Math.ceil(Math.random()*100000000+1);
export const Post = mongoose.model("Post", postSchema);

export const InitPosts = () => {
    // const post1 = new Post({
    //     EAN: `${ean}`,
    //     title: "First post",
    //     image: "https://picsum.photos/200",
    //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     comment: "the best post"
    // });
    const post2 = new Post({ 
            EAN: `${ean}`,
            title: "Second post",
        image: "https://picsum.photos/200",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        comment: "I like it"
    });

    return Promise.all([
        // post1.save().then(() => console.log("here I am", post1)),
        post2.save().then(() => console.log("here I am", post2))
    ]);
};
