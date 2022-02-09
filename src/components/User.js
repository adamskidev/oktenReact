import React from 'react';

const User = ({user}) => {

    const {id, name, username, email, phone} = user;

    return (
        <div className={'user'}>
            <h2>{id} - {name} "{username}"</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default User;