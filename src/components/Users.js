import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => setUsers(user))
    }, [])

    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;