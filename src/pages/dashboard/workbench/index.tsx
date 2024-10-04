import { Col, Row, Space } from "antd";

import BannerCard from "./banner-card";
import { Applications, Conversion } from "./conversion_applications";
import TotalCard from "./total-card";

const Workbench = () => {
  return (
    <div className="w-full h-full py-[16px] px-[16px] lg:px-[64px] box-border overflow-y-auto">
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

      <Row gutter={[16, 16]} className="mt-4">
        <Col span={24} md={8}>
          <TotalCard />
        </Col>
        <Col span={24} md={8}>
          <TotalCard />
        </Col>
        <Col span={24} md={8}>
          <TotalCard />
        </Col>
      </Row>
    </div>
  );
};

export default Workbench;
