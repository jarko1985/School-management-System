import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const Navbar = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          className="w-[200px] outline-none p-2 bg-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="rounded-full text-xs absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-blue-500 text-white">
            3
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Hassan Jarko</span>
          <span className="text-[10px] text-gray-500 text-right">{role}</span>
        </div>
        {/* <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        /> */}
        <UserButton afterSwitchSessionUrl="https://school-management-system-nine-chi.vercel.app" />
      </div>
    </div>
  );
};

export default Navbar;
