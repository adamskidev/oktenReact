import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div>
            <h4>{userId}/{id} {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;