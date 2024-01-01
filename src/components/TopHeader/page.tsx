import ContentWrap from "../ContentWrap/page"
import ModeToggle from "../ModeToggle/page"
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
            fontSize: 14,
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          <Typography textColor="neutral.800">Readme.gen</Typography>
        </Link>
      </Box>
      <Box sx={{ gap: 2 }}>
        <ModeToggle />

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
