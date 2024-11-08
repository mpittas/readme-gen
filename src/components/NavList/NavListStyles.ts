import { styled } from "@mui/joy/styles";
import { List, ListItemButton, Box, Input } from "@mui/joy";

export const StyledInput = styled(Input)(({ theme }) => ({
  minHeight: 46,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledInputWrap = styled(Box)(({ theme }) => ({
  paddingBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "0",
  },
}));

export const StyledListWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const StyledList = styled(List)(({ theme }) => ({
  gap: 8,
  overflowX: "hidden",
  overflowY: "auto",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    maxHeight: "200px",
    padding: "8px",
    "&::-webkit-scrollbar": {
      height: "4px",
      width: "4px",
    },
  },
}));

export const StyledListInner = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.vars.radius.sm,
  padding: "10px",
  display: "flex",
  alignItems: "center",
  fontSize: 14,
  transition: "background-color .2s ease",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? `${theme.palette.neutral[900]} !important`
        : `${theme.palette.neutral[200]} !important`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
    padding: "6px 12px",
    whiteSpace: "nowrap",
    minWidth: "auto",
    flex: "0 0 auto",
    "& .MuiListItemDecorator-root": {
      marginRight: "4px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 11,
    padding: "4px 8px",
  },
}));
