import React from "react"
import { useColorScheme, useTheme } from "@mui/joy/styles"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Box, Typography } from "@mui/joy"
import Image from "next/image"

interface MarkdownPreviewProps {
  markdown: string
}

function ZeroState() {
  const { mode, setMode } = useColorScheme()

  const theme = useTheme()

  return (
    <Box sx={{ maxWidth: 300, margin: "auto auto", textAlign: "center" }}>
      <Typography
        textColor={
          mode === "dark"
            ? `${theme.vars.palette.neutral[700]}`
            : `${theme.vars.palette.neutral[400]}`
        }
        sx={{ fontSize: 34, mb: 1 }}
      >
        Start typing
      </Typography>
      <Typography
        textColor={
          mode === "dark"
            ? `${theme.vars.palette.neutral[700]}`
            : `${theme.vars.palette.neutral[400]}`
        }
        level="body-md"
      >
        Use the predefined markdown templates or write your own
      </Typography>
    </Box>
  )
}

function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
  if (!markdown.trim()) {
    return <ZeroState />
  }

  return (
    <ReactMarkdown className="preview" remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  )
}

export default MarkdownPreview
