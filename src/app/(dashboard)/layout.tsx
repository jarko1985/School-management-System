import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class Connect",
  description: "Smart School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-screen flex`}>
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-6"
        >
          <Image src="/school.svg" alt="logo" width={64} height={64} />
          <span className="hidden lg:block font-bold">Class Connect</span>
        </Link>
        <Menu />
      </div>
      <div
        className={`flex flex-col w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll`}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
}
