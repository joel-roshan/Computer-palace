import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Computer Palace -Laptop Mobile Phone Service",
  description: "Changanassery's Tech Repair Heroes! Fast, affordable fixes for laptops, phones & TVs. New & used tech too!Computer Palace #Changanassery #Kerala"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
