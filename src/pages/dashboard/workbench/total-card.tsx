import { Card } from "antd";
import { SvgIcon } from "@/components/Icon";

const TotalCard = () => {
  return (
    <Card>
      <div className="flex">
        <div className="flex-grow">
          <h6 className="text-sm font-medium">Total Active Users</h6>
          <div className="flex mt-4 items-center gap-2">
            <SvgIcon icon="ic_rise" size={24} color="rgb(34, 197, 94)" />
            <div>+2.6%</div>
          </div>
          {/* <SvgIcon icon="ic_decline" size={24} color="rgb(255, 86, 48)" /> */}
          <div className="text-2xl font-bold mt-3">19,826</div>
        </div>
        <div className="bg-[#bfa] w-[200px] h-[100px]"></div>
      </div>
    </Card>
  );
};

export default TotalCard;
