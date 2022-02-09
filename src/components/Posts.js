import React, {useEffect, useState} from 'react';

import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts(value))
    }, [])

    return (
        <div className={'posts'}>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;