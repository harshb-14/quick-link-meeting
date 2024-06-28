import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './favicon.ico'
import { ClerkProvider } from "@clerk/nextjs";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { Toaster } from "../components/ui/toaster";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "link | Build Strong Connections Remotely",
  description: "Video Conferencing webapp",
  icons: {
    icon: ['/icons/favicon.ico'],
    apple: ['/icons/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html >
  );
}
