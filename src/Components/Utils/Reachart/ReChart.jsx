import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const sampleChartBooks = [
  {
    bookId: 1,
    bookName: "The Great Gatsby",
    chartLabel: "The Great Gatsby",
    totalPages: 192,
  },
  {
    bookId: 2,
    bookName: "To Kill a Mockingbird",
    chartLabel: "To kill a mocking bird",
    totalPages: 281,
  },
  { bookId: 3, bookName: "1984", chartLabel: "1984", totalPages: 328 },
  {
    bookId: 8,
    bookName: "The Alchemist",
    chartLabel: "The Alchemist",
    totalPages: 177,
  },
  {
    bookId: 5,
    bookName: "Pride and Prejudice",
    chartLabel: "Pride and prejudice",
    totalPages: 279,
  },
];

const chartColors = ["#2490FF", "#15C7B8", "#FDBA21", "#FF7A3D", "#FF1A1A"];

const getScale = (books) => {
  const maxPages = Math.max(...books.map((book) => book.totalPages), 340);
  const step = Math.max(85, Math.ceil(maxPages / 4 / 5) * 5);
  const topValue = step * 4;

  return [0, step, step * 2, step * 3, topValue];
};

const formatChartData = (books) =>
  books.map((book, index) => ({
    ...book,
    chartLabel: book.chartLabel ?? book.bookName,
    fill: chartColors[index % chartColors.length],
  }));

const TriangleBar = ({ fill, x, y, width, height }) => {
  const spread = width * 0.26;
  const startX = x - spread;
  const endX = x + width + spread;
  const centerX = x + width / 2;

  const path = `M ${startX},${y + height}
    Q ${x + width * 0.08},${y + height * 0.9} ${x + width * 0.24},${y + height * 0.52}
    Q ${x + width * 0.36},${y + height * 0.22} ${centerX},${y}
    Q ${x + width * 0.64},${y + height * 0.22} ${x + width * 0.76},${y + height * 0.52}
    Q ${x + width * 0.92},${y + height * 0.9} ${endX},${y + height}
    Z`;

  return <path d={path} fill={fill} />;
};

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={22}
        textAnchor="middle"
        fill="#9ca3af"
        fontSize="11"
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomValueLabel = ({ x, y, width, value, fill, payload }) => (
  <text
    x={x + width / 2}
    y={y - 12}
    fill={payload?.fill ?? fill}
    fontSize="14"
    fontWeight="700"
    textAnchor="middle"
  >
    {value}
  </text>
);

const ReChart = ({ books = [] }) => {
  const chartBooks = (books.length > 0 ? books : sampleChartBooks).slice(0, 5);
  const chartData = formatChartData(chartBooks);
  const ticks = getScale(chartBooks);

  return (
    <div className="rounded-[28px] border border-gray-200 bg-[#f5f5f5] p-4 shadow-sm md:p-8">
      <div
        className="mx-auto w-full max-w-6xl"
        style={{ aspectRatio: "1170 / 756" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 54, right: 36, left: 18, bottom: 64 }}
            barCategoryGap="18%"
          >
            <CartesianGrid
              stroke="#d7d7d7"
              strokeDasharray="4 6"
              vertical
              horizontal
            />
            <XAxis
              dataKey="chartLabel"
              tickLine={false}
              axisLine={false}
              interval={0}
              tick={<CustomXAxisTick />}
              height={56}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              ticks={ticks}
              domain={[0, ticks[ticks.length - 1]]}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(value) => (value === 0 ? "00" : value)}
              width={46}
            />
            <Bar
              dataKey="totalPages"
              shape={<TriangleBar />}
              maxBarSize={82}
              radius={0}
              isAnimationActive
            >
              <LabelList content={<CustomValueLabel />} />
              {chartData.map((book) => (
                <Cell key={book.bookId} fill={book.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReChart;
