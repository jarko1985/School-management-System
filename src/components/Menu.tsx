import { menuItems } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

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
          {/* {item.items.map((subItem) => (
            <Link
              href={subItem.href}
              key={subItem.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src={subItem.icon} alt="icon" width={20} height={20} />
              <span className="hidden lg:block">{subItem.label}</span>
            </Link>
          ))} */}
          {item.items.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <Link
                  href={subItem.href}
                  key={subItem.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-primary md:px-2 hover:text-white group"
                >
                  <Image src={subItem.icon} alt="icon" width={20} height={20} />
                  <span className="font-nunitoSans hidden lg:block text-[14px]">
                    {subItem.label}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
