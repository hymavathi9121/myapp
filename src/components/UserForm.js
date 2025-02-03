import React, { useState, useEffect } from 'react';

const UserForm = () => {
    const [userData, setUserData] = useState({ name: '', address: '', email: '', phone: '' });
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('userData'));
        if (savedData) {
            setUserData(savedData);
        }

        const handleBeforeUnload = (e) => {
            if (unsavedChanges) {
                e.returnValue = 'You have unsaved changes! Are you sure you want to leave?';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [unsavedChanges]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setUnsavedChanges(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(userData));
        setUnsavedChanges(false);
        alert('Data saved!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="address" value={userData.address} onChange={handleChange} placeholder="Address" required />
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
            <input type="phone" name="phone" value={userData.phone} onChange={handleChange} placeholder="Phone" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
