import {
  CloseOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Card, Drawer, Switch, Tooltip } from "antd";
import Color from "color";
import { CSSProperties, useState } from "react";
import { motion } from "framer-motion";

import { IconButton, SvgIcon } from "@/components/icon";
import { useThemeToken } from "@/theme/hooks";

const SettingButton = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
        whileTap="tap"
        variants={{
          tap: { scale: 0.9 },
          hover: { scale: 1.1 },
        }}
        whileHover="hover"
      >
        <IconButton className="h-10 w-10">
          <SvgIcon icon="ic-setting" size="24" />
        </IconButton>
      </motion.div>
    </div>
  );
};

export default SettingButton;
