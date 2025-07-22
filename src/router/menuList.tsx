import { Iconify, SvgIcon } from "@/components/Icon";

export const menuRoutes = [
  {
    label: "仪表",
    key: "/dashboard",
    icon: (
      <SvgIcon icon="ic-analysis" size={24} className="ant-menu-item-icon" />
    ),
    children: [
      {
        label: "工作台",
        key: "/dashboard/workbench",
      },
      {
        label: "分析",
        key: "/dashboard/analysis",
        children:[
          {
            label: "分析页",
            key: "/dashboard/analysis/page",
          },
          {
            label: "分析图表",
            key: "/dashboard/analysis/chart",
          },
        ]
      },
    ],
  },
  {
    label: "首页",
    key: "/home",
    icon: <Iconify icon="solar:widget-5-bold-duotone" width={24} height={24} />,
  },
  {
    label: "数据大屏",
    key: "/screen",
    icon: <Iconify icon="solar:pie-chart-3-bold" width={24} height={24} />,
  },
];
