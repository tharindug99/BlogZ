import { useState, useEffect } from 'react';

interface User {
    _id: any;
    id: number;
    name: string;
    email: string;
}

interface UseFetchUsersResult {
    users: User[];
    loading: boolean;
    error: string | null;
}

const useFetchAllUsers = (): UseFetchUsersResult => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error(`Failed to fetch users: ${response.statusText}`);
                }
                const data = await response.json();
                setUsers(data.users);
                setLoading(false);
            } catch (error) {
                
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading, error };
};

export default useFetchAllUsers;
