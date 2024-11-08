import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const nunitoSans = localFont({
  src: "./fonts/NunitoSans_7pt-Medium.ttf",
  variable: "--nunitoSans",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Class Connect",
  description: "Smart School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${nunitoSans.variable}`}>
          {children}
          <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
  );
}
