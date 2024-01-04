import React, { ReactNode, useState } from "react"
import { SxProps } from "@mui/system"
import { Typography } from "@mui/joy"
import { useColorScheme } from "@mui/joy/styles"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import {
  CollapseToggle,
  CollapseWrapper,
  CollapseContent,
} from "./CollapseStyles"

interface CollapsibleSectionProps {
  children: ReactNode
  label: string
  sx?: SxProps
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  children,
  label,
  sx,
}: CollapsibleSectionProps) => {
  const { mode, setMode } = useColorScheme()

  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

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
        <Typography>{label}</Typography>
        {!isCollapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </CollapseToggle>
      <CollapseContent>{!isCollapsed && children}</CollapseContent>
    </CollapseWrapper>
  )
}

export default CollapsibleSection
