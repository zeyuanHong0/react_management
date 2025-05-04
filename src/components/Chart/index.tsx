import ApexChart from "react-apexcharts";
import type { Props as ApexChartProps } from "react-apexcharts";

import { StyledApexChart, ThemeMode } from "./styles";
import { useThemeToken } from "@/theme/hooks";

const Chart = (props: ApexChartProps) => {
  const theme = useThemeToken();
  return (
    <StyledApexChart $thememode={ThemeMode.Light} $theme={theme}>
      <ApexChart {...props} />
    </StyledApexChart>
  );
};

export default Chart;
