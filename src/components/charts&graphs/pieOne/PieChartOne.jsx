import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group A", value: 300 },
  { name: "Group A", value: 300 },
  { name: "Group A", value: 200 },
  { name: "Group B", value: 200 },
  { name: "Group B", value: 100 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 100 },
  { name: "Group B", value: 200 },
  { name: "Group B", value: 50 },
  { name: "Group D", value: 250 },
  { name: "Group A", value: 200 },
  { name: "Group D", value: 140 },
  { name: "Group A", value: 200 },
  { name: "Group D", value: 190 },
];

const COLORS = ["#7cfc00", "#fafad2", "#f08080"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      fontSize="16px"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartOne = () => {
  return (
    <>
      <h3>
        Three Categories(Completed(green), Partially completed(yellow),
        Pending(pinkish)), with 16 parts
      </h3>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartOne;
