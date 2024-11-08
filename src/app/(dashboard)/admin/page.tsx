import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendar from "@/components/EventCalendar";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = async ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UserCard
            imageSrc="/staff.webp"
            type="admin"
            count="240"
            href="/list/teachers"
          />
          <UserCard
            imageSrc="/teachers.webp"
            type="teacher"
            count="650"
            href="/list/teachers"
          />
          <UserCard
            imageSrc="/students.webp"
            type="student"
            count="3,000"
            href="/list/students"
          />
          <UserCard
            imageSrc="/parents.webp"
            type="parent"
            count="6,500"
            href="/list/parents"
          />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
