import { styled } from "@mui/joy/styles"
import { Box } from "@mui/joy"

interface CollapseToggleProps {
  iscollapsed?: boolean
  mode?: "light" | "dark" | "system" | undefined
}

export const CollapseToggle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "iscollapsed",
})<CollapseToggleProps>(({ theme, mode, iscollapsed }) => ({
  backgroundColor:
    mode === "dark"
      ? theme.vars.palette.neutral[800]
      : theme.vars.palette.neutral[100],
  borderBottom: iscollapsed
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
  borderRadius: iscollapsed ? "8px" : "8px 8px 0 0",
  cursor: "pointer",
}))

export const CollapseWrapper = styled(Box)(() => ({
  borderRadius: "md",
  display: "flex",
  flexDirection: "column",
}))

export const CollapseContent = styled(Box)<CollapseToggleProps>(
  ({ iscollapsed, theme }) => ({
    visibility: iscollapsed ? "hidden" : "visible",
    height: "100%",
    flexGrow: "1",
    [theme.breakpoints.down("md")]: {
      // minHeight: "70vh",
    },
  })
)
