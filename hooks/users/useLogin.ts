import { useState } from "react";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  const handleSubmit = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = { email, password };
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }

      setLoading(false);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (error: any) {
      setError(error.message || "Failed to login");
      setLoading(false);
      return { success: false, error: error.message || "Failed to login" };
    }
  };

  return {
    loading,
    error,
    user,
    handleSubmit,
  };
}

export default useLogin;