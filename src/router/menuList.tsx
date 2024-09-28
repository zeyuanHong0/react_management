import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  LockOutlined,
  UserOutlined,
  UserSwitchOutlined,
  WindowsOutlined,
  ProductOutlined,
  TrademarkCircleOutlined,
  BookOutlined,
  LaptopOutlined,
  RestOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
export const menuRoutes = [
  {
    label: "仪表",
    key: "/",
    icon: <LineChartOutlined />,
    children: [
      {
        label: "工作台",
        key: "/acl/user",
      },
      {
        label: "分析",
        key: "/acl/role",
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
  {
    label: "权限管理",
    key: "/acl",
    icon: <LockOutlined />,
    children: [
      {
        label: "用户管理",
        key: "/acl/user",
        icon: <UserOutlined />,
      },
      {
        label: "角色管理",
        key: "/acl/role",
        icon: <UserSwitchOutlined />,
      },
      {
        label: "菜单管理",
        key: "/acl/permission",
        icon: <WindowsOutlined />,
      },
    ],
  },
  {
    label: "商品管理",
    key: "/product",
    icon: <ProductOutlined />,
    children: [
      {
        label: "品牌管理",
        key: "/product/trademark",
        icon: <TrademarkCircleOutlined />,
      },
      {
        label: "属性管理",
        key: "/product/attr",
        icon: <BookOutlined />,
      },
      {
        label: "SPU管理",
        key: "/product/spu",
        icon: <LaptopOutlined />,
      },
      {
        label: "SKU管理",
        key: "/product/sku",
        icon: <RestOutlined />,
      },
    ],
  },
];
