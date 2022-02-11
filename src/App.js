import React, {useEffect, useState} from 'react';

import './App.css';
import Users from "./components/Users";
import Form from "./components/Form";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users);
                setFilterUsers(users)
            })
    }, [])

    const filter = (data) => {
        let filterUsers = [...users];

        if (data.name) {
            filterUsers = filterUsers.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.username) {
            filterUsers = filterUsers.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        if (data.email) {
            filterUsers = filterUsers.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
        }

        setFilterUsers(filterUsers);
    }

    return (
        <div>
            <Form filter={filter}/>
            <Users users={filterUsers}/>
        </div>
    );
};

export default App;