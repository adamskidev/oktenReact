import React from 'react';

import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const App = () => {
    return (
        <div className={'container'}>
            <div className={'main-section'}>
                <Users/>
                <Posts/>
            </div>
            <div className={'comment-section'}>
                <Comments/>
            </div>
        </div>
    );
};

export default App;