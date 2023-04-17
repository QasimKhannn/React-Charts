import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Applicants Applied ", value: 400 },
  { name: "Test Appearance ", value: 300 },
  { name: "Interview Appearance ", value: 300 },
  { name: "Short Listed ", value: 200 },
  { name: "Successful Candidates ", value: 200 },
];

const COLORS = ["#FF6384 ", "#36A2EB ", "#FFCE56", "#4BC0C0 ", "#9966FF "];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  //   innerRadius,
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
      <tspan>{data[index].name}</tspan>
      <br />
      <tspan>({`${(percent * 100).toFixed(0)}%`})</tspan>
    </text>
  );
};

const PieChartTwo = () => {
  return (
    <>
      <h3>
        Five Parts, Number of (applicants applied, appeared in test, appeared in
        interview, short listed candids, successfull candids)
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

export default PieChartTwo;
