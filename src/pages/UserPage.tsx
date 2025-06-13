import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../api/userApi';
import User from '../components/User/User';

const UserPage: React.FC = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                // Replace 'someUserId' with the actual user ID you want to fetch
                const userData = await getUserDetails('someUserId');
                setUser(userData);
            } catch (err) {
                setError('Failed to load user details');
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            {user && <User user={user} />}
        </div>
    );
};

export default UserPage;