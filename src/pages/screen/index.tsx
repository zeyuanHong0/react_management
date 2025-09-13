import { useState, useEffect } from "react";

import LazyImage from "@/components/LazyImage";

const DataWall = () => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const newImages: string[] = [];
    for (let i = 0; i < 1000; i++) {
      // 使用 picsum 的随机参数生成不同图片
      newImages.push(`https://picsum.photos/seed/${i}/500/500`);
    }
    setImages(newImages);
  }, []);
  return (
    <div className="box-border h-full w-full overflow-y-auto bg-[#FFF] px-[16px] py-[16px] 2xl:px-[160px]">
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="h-auto w-full rounded-lg object-cover"
          />
          // <img key={index} src={src} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default DataWall;
