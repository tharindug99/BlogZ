import { useState, useEffect } from "react";

interface Post {
  image: string | undefined;
  userId: number;
  _id: number;
  title: string;
  body: string;
}

interface UseFetchUserPostsResult {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const useFetchUserPosts = (_id: number | null): UseFetchUserPostsResult => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!_id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/users/${_id}/posts/${_id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user posts: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setPosts(data.posts);
      } catch (error) {
        //setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [_id]);

  return { posts, loading, error };
};

export default useFetchUserPosts;
