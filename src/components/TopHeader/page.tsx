import * as React from "react"
import { useColorScheme, useTheme } from "@mui/joy/styles"
import ContentWrap from "../ContentWrap/page"
import { saveAs } from "file-saver"
import DownloadIcon from "@mui/icons-material/Download"
import ModeSwitcher from "../ModeSwitcher/page"

import { Button, Box, Link, Typography } from "@mui/joy"

interface TopHeaderProps {
  editorContent: string
}

const TopHeader: React.FC<TopHeaderProps> = ({ editorContent }) => {
  const handleDownload = () => {
    const blob = new Blob([editorContent], { type: "text/plain;charset=utf-8" })
    saveAs(blob, "readme.md")
  }

  const theme = useTheme()

  const { mode, setMode } = useColorScheme()

  return (
    <ContentWrap
      sx={{
        mb: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Link
          href="#"
          sx={{
            color: "danger",
            fontSize: 16,
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          <Typography
            textColor={
              mode === "dark"
                ? `${theme.vars.palette.neutral[200]}`
                : `${theme.vars.palette.neutral[800]}`
            }
          >
            Readme.gen
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <ModeSwitcher />
        <Button
          color="neutral"
          variant="solid"
          startDecorator={<DownloadIcon />}
          onClick={handleDownload}
        >
          Download
        </Button>
      </Box>
    </ContentWrap>
  )
}

export default TopHeader
