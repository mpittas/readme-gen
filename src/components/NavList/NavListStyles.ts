import { styled } from "@mui/joy/styles"
import { List, ListItemButton, Box } from "@mui/joy"

export const StyledListWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}))

export const StyledList = styled(List)(({ theme }) => ({
  gap: 8,
  overflowX: "hidden",
  overflowY: "auto",
  height: 20,
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}))

export const StyledListInner = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}))

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.vars.radius.sm,
  padding: "10px",
  display: "flex",
  alignItems: "center",
  fontSize: 14,
}))
