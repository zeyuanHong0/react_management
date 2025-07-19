import { Select, Typography } from "antd";
import { useState } from "react";

import Card from "@/components/Card";
import Chart from "@/components/Chart";
import useChart from "@/components/Chart/useChart";

export default function AreaDownload() {
  const [year, setYear] = useState("2025");
  const series: Record<string, ApexAxisChartSeries> = {
    "2024": [
      { name: "China", data: [10, 41, 35, 51, 49, 61, 69, 91, 148, 35, 51] },
      { name: "America", data: [10, 34, 13, 56, 77, 88, 99, 45, 13, 56, 77] },
    ],

    "2025": [
      { name: "China", data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 35, 51] },
      { name: "America", data: [56, 13, 34, 10, 77, 99, 88, 45, 13, 56, 77] },
    ],
  };
  return (
    <Card className="h-[380px] flex-col">
      <header className="flex w-full justify-between self-start">
        <Typography.Title level={5}>Area Installed</Typography.Title>
        <Select
          size="small"
          defaultValue={year}
          onChange={(value) => setYear(value)}
          options={[
            { value: 2025, label: "2025" },
            { value: 2024, label: "2024" },
          ]}
        />
      </header>
      <main className="w-full">
        <ChartArea series={series[year]} />
      </main>
    </Card>
  );
}

function ChartArea({ series }: { series: ApexAxisChartSeries }) {
  const chartOptions = useChart({
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jut",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {},
  });

  return (
    <Chart type="area" series={series} options={chartOptions} height={300} />
  );
}
