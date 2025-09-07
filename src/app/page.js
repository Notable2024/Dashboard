"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated (you can replace this with your actual auth logic)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
      router.push("/dashboard");
    }
    setIsLoading(false);
  }, [router]);

  const handleLogin = (email, password) => {
    // Simple authentication logic - replace with your actual auth API call
    if (email && password) {
      // Simulate successful login
      localStorage.setItem("authToken", "dummy-token");
      localStorage.setItem("userEmail", email);
      setIsAuthenticated(true);
      router.push("/dashboard");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // User will be redirected to dashboard
  }

  return <LoginForm onLogin={handleLogin} />;
}
