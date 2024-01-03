import React, { ReactNode, useState } from "react"
import { Box, Typography, IconButton } from "@mui/joy"
import { useTheme, useColorScheme } from "@mui/joy/styles"
import { SxProps } from "@mui/system"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

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
  const theme = useTheme()
  const { mode, setMode } = useColorScheme()

  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Box
      sx={{
        ...sx,
        // p: 1,
        borderRadius: "md",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        onClick={handleCollapse}
        sx={(theme) => ({
          backgroundColor:
            mode === "dark"
              ? theme.vars.palette.neutral[800]
              : theme.vars.palette.neutral[100],
          borderBottom: isCollapsed
            ? "none"
            : `1px solid ${
                mode === "dark"
                  ? theme.vars.palette.neutral[700]
                  : theme.vars.palette.neutral[200]
              }`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          borderRadius: isCollapsed ? "8px" : "8px 8px 0 0",
          cursor: "pointer",
        })}
      >
        <Typography sx={{}}>{label}</Typography>
        {!isCollapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      <Box
        sx={{
          visibility: isCollapsed ? "hidden" : "visible",
          height: "100%",
          flexGrow: "1",
        }}
      >
        {!isCollapsed && children}
      </Box>
    </Box>
  )
}

export default CollapsibleSection
