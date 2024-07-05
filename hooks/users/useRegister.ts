import { useState } from "react";

function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const userData = { email, password };
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("data", data);

      setLoading(false);
      return { success: true, user: data.user };
    } catch (error: any) {
      setError(error.message || "Failed to register");
      setLoading(false);
      return { success: false, error: error.message || "Failed to register" };
    }
  };

  return {
    loading,
    error,
    handleSubmit,
  };
}

export default useRegister;
