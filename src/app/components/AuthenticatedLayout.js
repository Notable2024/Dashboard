"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function AuthenticatedLayout({ children }) {
  const pathname = usePathname();

  // If on login page (root), show only the form without sidebar
  const isAuthPage = pathname === "/";

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
