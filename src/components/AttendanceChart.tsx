"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({
  data,
}: {
  data: { name: string; present: number; absent: number }[];
}) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={500} height={300} data={data} barSize={20}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#ddd"
          color="black"
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: "#00478F" }}
          tickLine={false}
        />
        <YAxis axisLine={false} tick={{ fill: "#FF5D00" }} tickLine={false} />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
        />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
        />
        <Bar dataKey="present" fill="#00478F" legendType="circle" />
        <Bar dataKey="absent" fill="#FF5D00" legendType="circle" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
