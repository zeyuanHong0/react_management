import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Color from "color";

// import { useThemeToken } from "@/theme/hooks";
import useSettingStore from "@/store/settingStore.ts";

const MultiTabs = () => {
  // const { colorPrimary, colorBorder } = useThemeToken();
  const navigate = useNavigate();
  const { openTabs, removeTabs, activeTabsKey, setActiveTabsKey } =
    useSettingStore();

  const onChange = (newActiveKey: string) => {
    setActiveTabsKey(newActiveKey);
    navigate(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "remove") {
      removeTabs(targetKey as string, navigate);
    }
  };
  const onTabClick = (key: string) => {
    setActiveTabsKey(key);
  };
  return (
    <StyledMultiTabs>
      <Tabs
        hideAdd
        type="editable-card"
        onChange={onChange}
        activeKey={activeTabsKey}
        items={openTabs}
        onTabClick={onTabClick}
        onEdit={onEdit}
      />
    </StyledMultiTabs>
  );
};

const StyledMultiTabs = styled.div`
  height: 100%;
  margin-top: 2px;
  .anticon {
    margin: 0px !important;
  }
  .ant-tabs {
    height: 100%;
    .ant-tabs-content {
      height: 100%;
    }
    .ant-tabs-tabpane {
      height: 100%;
      & > div {
        height: 100%;
      }
    }
  }

  /* 隐藏滚动条 */
  .hide-scrollbar {
    overflow: scroll;
    flex-shrink: 0;
    scrollbar-width: none; /* 隐藏滚动条 Firefox */
    -ms-overflow-style: none; /* 隐藏滚动条 IE/Edge */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* 隐藏滚动条 Chrome/Safari/Opera */
  }
`;

export default MultiTabs;
