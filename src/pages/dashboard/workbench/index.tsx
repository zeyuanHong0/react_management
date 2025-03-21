import { Col, Row, Space, Card } from "antd";

import BannerCard from "./banner-card";
import { Applications, Conversion } from "./conversion_applications";
import TotalCard from "./total-card";

const Workbench = () => {
  return (
    <div className="box-border h-full w-full overflow-y-auto px-[16px] py-[16px]">
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
          <TotalCard
            title="Total Active Users"
            increase
            count="18,765"
            percent="2.6%"
            chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
          />
        </Col>
        <Col span={24} md={8}>
          <TotalCard
            title="Total Installed"
            increase
            count="4,876"
            percent="0.2%"
            chartData={[45, 52, 38, 24, 33, 26, 21, 20, 6]}
          />
        </Col>
        <Col span={24} md={8}>
          <TotalCard
            title="Total Downloads"
            increase={false}
            count="678"
            percent="0.1%"
            chartData={[35, 41, 62, 42, 13, 18, 29, 37, 36]}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center" className="mt-4">
        <Col span={24} lg={8}>
          <Card></Card>
        </Col>
        <Col span={24} lg={16}>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
};

export default Workbench;
