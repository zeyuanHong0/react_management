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

import CyanBlur from "@/assets/images/cyan-blur.png";
import RedBlur from "@/assets/images/red-blur.png";
import { IconButton, SvgIcon } from "@/components/Icon";
import { useThemeToken } from "@/theme/hooks";

const SettingButton = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const {
    colorPrimary,
    colorBgBase,
    colorTextSecondary,
    colorTextTertiary,
    colorBgContainer,
  } = useThemeToken();
  const style: CSSProperties = {
    backdropFilter: "blur(20px)",
    backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
    backgroundPosition: "right top, left bottom",
    backgroundSize: "50, 50%",
  };
  return (
    <>
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
          onClick={() => setDrawerOpen(true)}
        >
          <IconButton className="h-10 w-10">
            <SvgIcon icon="ic-setting" size="24" />
          </IconButton>
        </motion.div>
      </div>
      <Drawer
        placement="right"
        title="Settings"
        onClose={() => setDrawerOpen(false)}
        open={openDrawer}
        closable={false}
        styles={{
          body: { padding: 0 },
          mask: { backgroundColor: "transparent" },
          header: {
            backgroundColor: colorBgContainer,
          },
        }}
        style={style}
        width={280}
        extra={
          <IconButton
            onClick={() => setDrawerOpen(false)}
            className="h-9 w-9 hover:scale-105"
          >
            <CloseOutlined className="text-gray-400" />
          </IconButton>
        }
      >
        <div></div>
      </Drawer>
    </>
  );
};

export default SettingButton;
