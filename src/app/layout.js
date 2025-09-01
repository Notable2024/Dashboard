import "./globals.css";
import Sidebar from "@/app/components/Sidebar";

export const metadata = {
  title: "Notable Dashboard",
  description: "Admin Dashboard with Users tab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
