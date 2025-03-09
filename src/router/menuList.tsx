import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
export const menuRoutes = [
  {
    label: "仪表",
    key: "/dashboard",
    icon: <LineChartOutlined />,
    children: [
      {
        label: "工作台",
        key: "/dashboard/workbench",
      },
      {
        label: "分析",
        key: "/dashboard/analysis",
      },
    ],
  },
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "数据大屏",
    key: "/screen",
    icon: <FundProjectionScreenOutlined />,
  },
];
