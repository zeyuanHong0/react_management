import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

function LazyImage(props: LazyImageProps) {
  const { src, alt, ...rest } = props;
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  // 占位图
  const placeholder =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWUxZTEiLz48L3N2Zz4=";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("🚀 ~ LazyImage ~ entries:", entries);

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img ref={imgRef} src={isVisible ? src : placeholder} alt={alt} {...rest} />
  );
}

export default LazyImage;
