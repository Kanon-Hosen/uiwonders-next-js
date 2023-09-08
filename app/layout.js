// import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

export const metadata = {
  title: "UI Wonders",
  description: "UI Wonders is a web design download library",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className="overflow-x-hidden bg-white overflow-x-hidden">

        {children}
      </body>
      </html>
      // </ClerkProvider>
  );
}
