import React from 'react';

const User = ({user}) => {
    const {id, name, username, email, phone} = user;

    return (
        <div>
            <h2>{id} - {name} "{username}"</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default User;