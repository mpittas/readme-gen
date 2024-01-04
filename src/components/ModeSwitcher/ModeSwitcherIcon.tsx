import React from "react"
import { useColorScheme } from "@mui/joy/styles"
import { IconButton } from "@mui/joy"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

export default function ModeSwitcherIcon() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <IconButton
      variant="soft"
      color="neutral"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}
