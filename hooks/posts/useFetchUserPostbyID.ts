import { useState, useEffect } from "react";

interface Post {
  userId: any;
  _id: string; // MongoDB's default `_id` field
  userID: string;
  title: string;
  content: string;
  author: string; // Or ObjectId if you use it in your schema
  badges: string[]; // Array of badge types
  image: string;
  created_at: string;
  updated_at: string;
}

interface User {
  _id: string;
  name: string;
}

interface UseFetchUserPostResult {
  post: Post | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const useFetchUserPost = (_id: string | null): UseFetchUserPostResult => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPost = async () => {
      if (!_id) {
        setLoading(false);
        setError("Invalid post ID.");
        return;
      }

      try {
        const response = await fetch(`/api/posts/${_id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.statusText}`);
        }
        const data: Post = await response.json();
        setPost(data);

        // Fetch user
        const userResponse = await fetch(`/api/users/${data.author}`);
        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user: ${userResponse.statusText}`);
        }
        const userData: User = await userResponse.json();
        setUser(userData);
        console.log(userData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPost();
  }, [_id]);

  return { post, user, loading, error };
};

export default useFetchUserPost;
