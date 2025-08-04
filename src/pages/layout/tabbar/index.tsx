import { useState } from "react";
import { Drawer } from "antd";

import { IconButton, SvgIcon } from "@/components/Icon";
import Menu from "../menu";
import BreadCrumb from "../_common/bread-crumb";
import AccountDropdown from "../_common/account-dropdown";

const Tabbar = () => {
  const [openDrawer, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="bg-[rgb(247, 245, 245)] box-border flex h-full w-full items-center justify-between px-3 md:pl-[30px] md:pr-[40px]">
        <div className="ml-6 hidden md:block">
          <BreadCrumb />
        </div>
        <IconButton
          className="h-10 w-10 md:hidden"
          onClick={() => setDrawerOpen(true)}
        >
          <SvgIcon icon="ic-menu" size="24" />
        </IconButton>
        <div className="flex cursor-pointer gap-4">
          {/* 头像 */}
          <div>
            <AccountDropdown />
          </div>
        </div>
      </div>
      {/* 左侧抽屉 */}
      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={openDrawer}
        closeIcon={false}
        styles={{
          header: {
            display: "none",
          },
          body: {
            padding: 0,
            overflow: "hidden",
          },
        }}
        width="auto"
      >
        <Menu showFoldBtn={false} />
      </Drawer>
    </>
  );
};

export default Tabbar;
