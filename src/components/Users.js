import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;