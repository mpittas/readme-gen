import { styled } from "@mui/joy/styles";
import { Box } from "@mui/joy";

interface CollapseToggleProps {
  iscollapsed?: boolean;
  mode?: "light" | "dark" | "system" | undefined;
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
  [theme.breakpoints.down("sm")]: {
    padding: "8px 12px",
    minHeight: "36px",
  },
}));

export const CollapseWrapper = styled(Box)(() => ({
  borderRadius: "md",
  display: "flex",
  flexDirection: "column",
}));

export const CollapseContent = styled(Box)<CollapseToggleProps>(
  ({ iscollapsed, theme }) => ({
    visibility: iscollapsed ? "hidden" : "visible",
    height: iscollapsed ? "0" : "auto",
    flexGrow: iscollapsed ? 0 : 1,
    transition: "all 0.2s ease-in-out",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      flexGrow: 0,
      height: iscollapsed ? "0" : "auto",
    },
  })
);
