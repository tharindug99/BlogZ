import { useState, useEffect } from 'react';

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    _id: any;
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface UseFetchUserResult {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const useFetchUser = (id: number | null): UseFetchUserResult => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/users/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch user: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setUser(data);
                setLoading(false);
            } catch (error) {
                //setError(error);
                setLoading(false);
            }
        };

       fetchUser();
    }, [id]);

    return { user, loading, error };
};

export default useFetchUser;
