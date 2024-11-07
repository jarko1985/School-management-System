import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserCard = async ({
  type,
  count,
  imageSrc,
  href,
}: {
  type: "admin" | "teacher" | "student" | "parent";
  count: string;
  imageSrc: string;
  href: string;
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };
  const data = await modelMap[type].count();
  return (
    <Link
      href={href}
      className="relative w-50 h-40 overflow-hidden rounded-lg cursor-pointer group"
    >
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 z-0 ease-out transform group-hover:scale-125 group-hover:blur-sm"
      />
      <Image
        src="/more.png"
        alt="more"
        width={20}
        height={20}
        className="z-10 absolute right-2"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-500 bg-opacity-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <h2 className="text-white text-lg font-semibold">{type}</h2>
        <p className="text-white text-lg font-bold">{data}</p>
        <span className="text-[12px] mt-3 bg-white px-2 py-1 rounded-full text-green-600">
          11/2024
        </span>
      </div>
    </Link>
  );
};

export default UserCard;
