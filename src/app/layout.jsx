
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashWrapper from "@/Dev/Components/SplashWrapper ";
import { ToastContainer, toast } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Forward Sols",
description: "Forward Sols is a modern tech solutions provider offering innovative web development, e-commerce, and AI integration services tailored for businesses aiming to grow digitally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
       <SplashWrapper>{children}</SplashWrapper>
       <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
       />
      </body>
    </html>
  );
}
