import Card from "@/components/Card";
import { SvgIcon } from "@/components/Icon";
import Chart from "@/components/Chart";
import useChart from "@/components/Chart/useChart";

type Props = {
  title: string;
  increase: boolean;
  count: string;
  percent: string;
  chartData: number[];
};

const TotalCard = ({ title, increase, count, percent, chartData }: Props) => {
  return (
    <Card>
      <div className="flex justify-between overflow-hidden">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <div className="flex mt-4 items-center gap-2">
            {increase ? (
              <SvgIcon icon="ic_rise" size={24} color="rgb(34, 197, 94)" />
            ) : (
              <SvgIcon icon="ic_decline" size={24} color="rgb(255, 86, 48)" />
            )}
            <div>
              {increase ? "+" : "-"}
              {percent}
            </div>
          </div>
          <div className="text-2xl font-bold mt-3">{count}</div>
        </div>
        <div className="h-[100px]">
          <LineChart data={chartData} />
        </div>
      </div>
    </Card>
  );
};

const LineChart = ({ data }: { data: number[] }) => {
  const series = [
    {
      name: "",
      data,
    },
  ];
  const chartOptions = useChart({
    tooltip: {
      x: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
        showDuplicates: false,
      },
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  });
  return (
    <Chart type="line" series={series} options={chartOptions} width={120} />
  );
};

export default TotalCard;
