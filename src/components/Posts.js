import React, {useEffect, useState} from 'react';

const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [id])

    return (
        <div>
            {posts.map(post => <div key={post.id}>
                <h4>{post.userId}/{post.id} {post.title} </h4>
                <h5>{post.body}</h5>
            </div>)}
        </div>
    );
};

export default Posts;