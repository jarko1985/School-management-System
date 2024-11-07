import React from "react";

const Announcements = async () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#C9E1F8] rounded-md p-4 hover:shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">First Announcement</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              01-01-2024
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pharetra tincidunt odio nec maximus. Nulla nec mattis eros, non
            dictum risus. Integer luctus et ex et commodo
          </p>
        </div>
        <div className="bg-[#D2EEDB] rounded-md p-4 hover:shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">First Announcement</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              03-01-2024
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="bg-[#FDD2C3] rounded-md p-4 hover:shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">First Announcement</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              05-01-2024
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Morbi scelerisque tincidunt massa, id sagittis enim finibus id.
            Quisque non eros viverra, posuere ipsum sit amet, mattis nulla.
            Donec et leo non odio pharetra viverra. Nulla mauris dolor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
