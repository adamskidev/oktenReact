import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <h4>{postId}/{id} {name}</h4>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;