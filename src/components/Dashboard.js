import React from 'react';
import Counter from './Counter';
import UserForm from './UserForm';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <Counter />
            <UserForm />
        </div>
    );
};

export default Dashboard;
