import "./globals.css";
import AuthenticatedLayout from "./components/AuthenticatedLayout";

export const metadata = {
  title: "Notable Dashboard",
  description: "Admin Dashboard with Users tab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthenticatedLayout>
          {children}
        </AuthenticatedLayout>
      </body>
    </html>
  );
}