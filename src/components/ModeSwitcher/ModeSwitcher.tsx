import React from "react"
import { useColorScheme } from "@mui/joy/styles"
import Button from "@mui/joy/Button"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Button
      variant="soft"
      color="neutral"
      startDecorator={mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? "Turn light" : "Turn dark"}
    </Button>
  )
}
