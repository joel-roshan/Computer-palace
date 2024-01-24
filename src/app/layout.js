import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Computer palace",
  description: "We are a computer,mobile and TV repair shop in the heart of the  Changanacherry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
