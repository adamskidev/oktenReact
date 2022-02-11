import React, {useState} from 'react';

import './App.css';
import Users from "./components/Users";
import Details from "./components/Details";
import Posts from "./components/Posts";

const App = () => {
    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);

    const getUser = (user) => {
        setUser(user);
        setId(null);
    }
    const getId = (id) => setId(id);

    return (
        <div>
            <div className={'main-content'}>
                <Users getUser={getUser}/>
                {user && <Details user={user} getId={getId}/>}
            </div>
            <div className={'posts'}>
                {id && <Posts id={id}/>}
            </div>
        </div>
    );
};

export default App;