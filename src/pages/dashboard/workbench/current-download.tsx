import { Typography, Card } from "antd";

import Chart from "@/components/Chart";
import useChart from "@/components/Chart/useChart";

const CurrentDownload = () => {
  return (
    <Card className="flex-col">
      <header className="self-start">
        <Typography.Title level={5}>Current Download</Typography.Title>
      </header>
      <main>
        <ChartDonut />
      </main>
    </Card>
  );
};

const series = [44, 55, 13, 43];
const ChartDonut = () => {
  const chartOptions = useChart({
    labels: ["Mac", "Window", "IOS", "Android"],
    stroke: {
      show: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    tooltip: {
      fillSeriesColor: false,
    },
    chart: {
      width: 240,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            total: {
              fontSize: "12px",
            },
            value: {
              fontSize: "18px",
              fontWeight: 700,
            },
          },
        },
      },
    },
  });

  return (
    <Chart type="donut" series={series} options={chartOptions} height={360} />
  );
};

export default CurrentDownload;
