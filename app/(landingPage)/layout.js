// import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "@/components/Navbar";
import "../globals.css";

export const metadata = {
  title: "UI Wonders",
  description: "UI Wonders is a web design download library",
};

export default function RootLayout({ children }) {
  return (
    <div className="overflow-x-hidden">
        <Navbar></Navbar>
        {children}
    </div>
  );
}
