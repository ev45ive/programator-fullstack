import React from 'react';
import { Card } from '../components/PostCard';
import axios from 'axios'

export class PostsView extends React.Component {
    state = {
        posts: [{
            title: "Front post",
            image: "https://picsum.photos/200",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "Front post_2",
            image: "https://picsum.photos/id/237/200/300",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
        ]
    }
    componentDidMount() {
        this.loadPosts()
    }
    loadPosts = () => {
        axios.get('http://localhost:8080/api/posts')
            .then(response => this.setState({posts:response.data})).catch(error => console.log(error))
    }


    render() {
        return (
            <>
                <div className="card p-5">
                    <div className="row row-cols-1 row-cols-md-4">
                        {this.state.posts.map(post =>
                            <Card post={post} key={post.title} />
                        )}
                    </div>
                </div>
            </>
        )
    }
}