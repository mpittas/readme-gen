import * as React from "react"
import { useColorScheme } from "@mui/joy/styles"
import ContentWrap from "../ContentWrap/page"
import { saveAs } from "file-saver"
import DownloadIcon from "@mui/icons-material/Download"

import { Button, Box, Link, Typography } from "@mui/joy"

interface TopHeaderProps {
  editorContent: string
}

const TopHeader: React.FC<TopHeaderProps> = ({ editorContent }) => {
  const handleDownload = () => {
    const blob = new Blob([editorContent], { type: "text/plain;charset=utf-8" })
    saveAs(blob, "readme.md")
  }

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
          <Typography textColor={mode === "dark" ? "#fff" : "#000"}>
            Readme.gen
          </Typography>
        </Link>
      </Box>
      <Box sx={{ gap: 2 }}>
        <Button
          startDecorator={<DownloadIcon />}
          onClick={handleDownload}
          sx={{ marginLeft: "0.5rem" }}
        >
          Download
        </Button>
      </Box>
    </ContentWrap>
  )
}

export default TopHeader
