import {
  CloseOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Card, Drawer, Switch, Tooltip } from "antd";
import Color from "color";
import { CSSProperties, useState } from "react";

import { IconButton, SvgIcon } from "@/components/icon";
import { useThemeToken } from "@/theme/hooks";

const SettingButton = () => {
  return (
    <div className="flex items-center justify-center">
      <IconButton className="h-10 w-10">
        <SvgIcon icon="ic-setting" size="24" />
      </IconButton>
    </div>
  );
};

export default SettingButton;
