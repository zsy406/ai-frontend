import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../../api/userApi';
import { UserType } from '../../types/user';

const User: React.FC = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userData = await getUserDetails();
                setUser(userData);
            } catch (err) {
                setError('Failed to fetch user details');
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
            <h2>User Profile</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Additional user details can be displayed here */}
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default User;