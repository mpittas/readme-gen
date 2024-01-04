import { styled } from "@mui/joy/styles"
import { Grid } from "@mui/joy"

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    height: "calc(100vh - 108px)",
  },
  overflow: "hidden",
}))
