import { styled } from "@mui/joy/styles"
import { Link, Box } from "@mui/joy"

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "danger",
  fontSize: 16,
  fontWeight: "700",
  textTransform: "uppercase",
  "&:hover": {
    textDecoration: "none",
  },
}))

export const StyledIconsWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
}))
