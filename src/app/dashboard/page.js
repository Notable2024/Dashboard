"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/");
      return;
    }

    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-purple-200">
              Welcome to the Dashboard 🚀
            </h1>
            {userEmail && (
              <p className="text-gray-300 mt-2">Logged in as: {userEmail}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Users</span>
                <span className="text-white font-semibold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Active Sessions</span>
                <span className="text-white font-semibold">567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Revenue</span>
                <span className="text-white font-semibold">$12,345</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Recent Activity</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-300">
                <p>New user registered</p>
                <p className="text-gray-500">2 minutes ago</p>
              </div>
              <div className="text-sm text-gray-300">
                <p>Payment received</p>
                <p className="text-gray-500">15 minutes ago</p>
              </div>
              <div className="text-sm text-gray-300">
                <p>System update completed</p>
                <p className="text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                Add New User
              </button>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Generate Report
              </button>
              <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
