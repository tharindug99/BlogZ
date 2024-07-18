import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  content: string;
}

interface User {
  id: string;
  name: string;
}

interface UseFetchUserPostResult {
  post: Post | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const useFetchUserPost = (id: number | null): UseFetchUserPostResult => {
  const [post, setPost] = useState<Post | null>(null); // Initialize with null
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPost = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.statusText}`);
        }
        const data = await response.json();
        setPost(data);

        // Fetch user
        const userResponse = await fetch(`/api/users/${data.userId}`);
        console.log(userResponse);
        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user: ${userResponse.statusText}`);
        }
        const userData = await userResponse.json();
        setUser(userData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPost();
  }, [id]);

  return { post, user, loading, error }; // Return post instead of posts
};

export default useFetchUserPost;
function setUser(userData: any) {
  throw new Error("Function not implemented.");
}
