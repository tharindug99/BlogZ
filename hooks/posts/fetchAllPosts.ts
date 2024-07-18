import { useState, useEffect } from "react";
import { Post } from "@/app/models/post"; // Adjust the import path as needed

function useFetchPosts(userId: number | undefined) {
  const [data, setData] = useState<{ message: string; posts: Post[] } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`/api/posts?userId=${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [userId]);

  return { data, loading, error };
}

export default useFetchPosts;
