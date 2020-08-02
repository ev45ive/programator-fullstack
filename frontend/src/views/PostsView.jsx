import React, { useState, useEffect } from 'react';
import { Card } from '../components/PostCard';


export const Posts = () => {
    const [posts, setPosts] = useState([
        {
            EAN: 12345678,
            title: "Second post",
            image: "https://picsum.photos/200",
            body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            comment: "I like it"
        }
    ]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:8080/api/posts");
            const responseData = await response.json();
            setPosts(responseData);
        };
        fetchPosts();
    }, []);
    return (
        <>
            <PostsView posts={posts} />
        </>
    );
};

export const PostsView = (props) => {
    return (
        <div>
            <h1>Posts View will be here</h1>
            {props.posts.map((post) => (
                <div className="media" key={post._id}>
                    <img src={post.image} />
                    <h2>{post.title}</h2>
                </div>
            ))}

        </div>
    )
};