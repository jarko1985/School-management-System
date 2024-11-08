"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaMale, FaFemale } from "react-icons/fa";

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: "Total",
      count: boys + girls,
      fill: "white",
    },
    {
      name: "Girls",
      count: girls,
      fill: "#FF5D00",
    },
    {
      name: "Boys",
      count: boys,
      fill: "#00478F",
    },
  ];
  return (
    <div className="relative w-full h-[75%]">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FaFemale size={50} fill="#FF5D00" className="-mr-2" />
        <FaMale size={50} fill="#00478F" className="-ml-2" />
      </div>
    </div>
  );
};

export default CountChart;
