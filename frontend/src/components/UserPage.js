import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserPage() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('http://localhost:5000/api/protected', {
                method: 'GET',
                credentials: 'include',
            });
            if (response.ok) {
                const data = await response.json();
                setUsername(data.msg.split(' ')[1]); // Extract username from response message
            } else {
                navigate('/');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        navigate('/');
    };

    return (
        <div>
            <h1>Hello {username}</h1>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default UserPage;
