"use client"
import * as React from "react"
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles"
import Button from "@mui/joy/Button"

interface MarkdownEditorProps {
  selectedTemplateId?: string
}

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light")
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  )
}
