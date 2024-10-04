import { Col, Row, Space } from "antd";

import BannerCard from "./banner-card";
import { Applications, Conversion } from "./conversion_applications";

const Workbench = () => {
  return (
    <div className="w-full h-full p-[12px] box-border overflow-y-auto">
      <Row gutter={[16, 16]} justify="center">
        <Col span={24} lg={16}>
          <BannerCard />
        </Col>
        <Col span={24} lg={8}>
          <Space
            direction="vertical"
            size="large"
            className="h-full w-full justify-center"
          >
            <Conversion />
            <Applications />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Workbench;
