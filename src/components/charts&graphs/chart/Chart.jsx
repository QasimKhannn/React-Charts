import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { date: "2022-01-01", uv: 400, pv: 2400, amt: 2400 },
  { date: "2022-01-02", uv: 300, pv: 4567, amt: 2400 },
  { date: "2022-01-03", uv: 200, pv: 1398, amt: 2400 },
  { date: "2022-01-04", uv: 278, pv: 3908, amt: 2400 },
  { date: "2022-01-05", uv: 189, pv: 4800, amt: 2400 },
  { date: "2022-01-06", uv: 239, pv: 3800, amt: 2400 },
  { date: "2022-01-07", uv: 349, pv: 4300, amt: 2400 },
];

const Chart = () => {
  return (
    <>
      <h3>
        Student to Dates chart(vertical values are students , and horizontal
        values are dates)
      </h3>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis ticks={[100, 200, 300, 400]} />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default Chart;
