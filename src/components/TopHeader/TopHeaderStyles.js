import { Link } from "@mui/joy"

const StyledLink = styled(<Link />)(({ theme }) => ({
  // Outputs 'var(--joy-palette-primary-500)'
  color: theme.vars.palette.primary[500],
}))

const StatValue = styled("div", {
  name: "JoyStat",
  slot: "value",
})(({ theme }) => ({
  ...theme.typography.h2,
}))
