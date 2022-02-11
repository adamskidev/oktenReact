import React from 'react';

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div className={'user'}>
            <h3>{id} {name}</h3>
            <button onClick={() => getUser(user)}>Get details ></button>
        </div>
    );
};

export default User;