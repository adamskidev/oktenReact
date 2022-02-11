import React from 'react';

const Users = ({users}) => {
    return (
        <div>
            {users.map(user => <div key={user.id} className={'user'}>
                {user.id}. {user.name} "{user.username}" {user.email}
            </div>)}
        </div>
    );
};

export default Users;