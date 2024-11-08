import { menuItems } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Menu = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <Link
                  href={subItem.href}
                  key={subItem.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-[#00478F] md:px-2 hover:text-[#FF5D00] transition-transform hover:translate-x-2 duration-300  group"
                >
                  {React.createElement(subItem.iconComponent, {
                    size: "25",
                    className: "hover",
                  })}
                  <span className="font-nunitoSans hidden lg:block text-[14px]">
                    {subItem.label}
                  </span>
                </Link>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
