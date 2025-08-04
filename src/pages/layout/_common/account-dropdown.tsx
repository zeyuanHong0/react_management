import React from "react";
import { Dropdown, Divider } from "antd";
import type { MenuProps } from "antd";

import { useThemeToken } from "@/theme/hooks";

import { IconButton } from "@/components/Icon";

const AccountDropdown = () => {
  const avatar =
    "https://media.giphy.com/media/DyQrKMpqkAhNHZ1iWe/giphy.gif?cid=82a1493b9thyjlcpxscciyl4qco3k4x6pr9l4m4d8xuucpmb&ep=v1_gifs_trending&rid=giphy.gif&ct=g";

  const { colorBgElevated, borderRadiusLG, boxShadowSecondary } =
    useThemeToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
  };

  const dropdownRender = (menu: React.ReactNode) => (
    <div style={contentStyle}>
      <div className="flex flex-col items-start p-4">
        <div>Alexander Smith</div>
        <div className="text-gray">alexander.smith@example.com</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {menu}
    </div>
  );

  const items: MenuProps["items"] = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={dropdownRender}
    >
      <IconButton className="h-10 w-10 transform-none px-0 hover:scale-105">
        <img className="h-8 w-8 rounded-full" src={avatar} alt="avatar" />
      </IconButton>
    </Dropdown>
  );
};

export default AccountDropdown;
