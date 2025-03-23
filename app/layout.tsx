import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scout",
  description: "Scout - Safety Assistant",
  icons: {
    icon: "/scout.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/scout.png" alt="Scout Logo" />
      </body>
    </html>
  );
}
