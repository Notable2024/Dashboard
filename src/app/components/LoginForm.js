"use client";
import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
   <div className="flex min-h-screen items-center justify-center bg-black text-white">
  {/* Left Side Image */}
  <div className="hidden md:flex w-1/1 h-screen">
    <div className="w-full h-full bg-[url('assets/banner.png')] bg-cover bg-center" />
  </div>
      {/* Right Side Login Form */}
      <div className="flex w-full md:w-1/2 h-screen items-center justify-center px-6">
        <div className="max-w-md w-full">
           <div className="flex justify-center">
            <div className="w-60 h-30 bg-[url('assets/logo.png')] bg-cover bg-center" />
          </div>
          <h2 className="text-3xl font-semibold text-center mb-8 text-white">
            Welcome to <br /> Notable Dashboard
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded-lg">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 #C4A053"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-[#C4A053] text-white font-semibold hover:opacity-90 transition"
            >
             Sign Up
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm text-white hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
