import React, { ReactNode, useCallback, useState } from "react";
import { SxProps } from "@mui/system";
import { Typography } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  CollapseToggle,
  CollapseWrapper,
  CollapseContent,
} from "./CollapseStyles";

interface CollapsibleSectionProps {
  children: ReactNode;
  label: string;
  sx?: SxProps;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  children,
  label,
  sx,
}: CollapsibleSectionProps) => {
  const { mode } = useColorScheme();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = useCallback(() => {
    setIsCollapsed((prevState) => !prevState);
  }, []);

  return (
    <CollapseWrapper
      sx={{
        ...sx,
        borderRadius: "md",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CollapseToggle
        mode={mode || "light"}
        iscollapsed={isCollapsed}
        onClick={handleCollapse}
      >
        <Typography
          level="title-sm"
          textColor="neutral.500"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            lineHeight: { xs: "1.2", sm: "1.4" },
          }}
        >
          {label}
        </Typography>
        {!isCollapsed ? (
          <ExpandLessIcon sx={{ fontSize: { xs: "18px", sm: "24px" } }} />
        ) : (
          <ExpandMoreIcon sx={{ fontSize: { xs: "18px", sm: "24px" } }} />
        )}
      </CollapseToggle>
      <CollapseContent iscollapsed={isCollapsed}>
        {!isCollapsed && children}
      </CollapseContent>
    </CollapseWrapper>
  );
};

export default CollapsibleSection;
