import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import './style.css';

const RandomeUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data.users))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="user-container">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    gender={user.gender}
                />
            ))}
        </div>
    );
};

export default RandomeUser;
