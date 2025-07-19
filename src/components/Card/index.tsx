import { CSSProperties, ReactNode } from "react";

import { useThemeToken } from "@/theme/hooks";

type Props = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};
export default function Card({ children, ...other }: Props) {
  const { colorBgContainer } = useThemeToken();

  return (
    <div
      style={{
        backgroundColor: colorBgContainer,
        backgroundImage: "none",
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        transition: `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
        borderRadius: "16px",
        padding: "24px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      {...other}
    >
      {children}
    </div>
  );
}
