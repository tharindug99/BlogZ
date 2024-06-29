import { useState, useEffect } from 'react';
import { posts } from '../lib/data';

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  userId: string;
  updated_at: string;
}

const useFetchPosts = (userId?: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await fetch(`http://localhost:3000/api/posts`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }

        const data: Post[] = await response.json();
        
        console.log(data);
        
        setPosts(data);
        setLoading(false);
      } catch (err:any) {
        setError(err.message || 'Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return { posts, loading, error };
};

export default useFetchPosts;
