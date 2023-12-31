import ContentWrap from "../ContentWrap/page"
import ModeToggle from "../ModeToggle/page"
import { saveAs } from "file-saver"

import { Button, Box } from "@mui/joy"

interface TopHeaderProps {
  editorContent: string
}

const TopHeader: React.FC<TopHeaderProps> = ({ editorContent }) => {
  const handleDownload = () => {
    const blob = new Blob([editorContent], { type: "text/plain;charset=utf-8" })
    saveAs(blob, "readme.md")
  }

  return (
    <ContentWrap sx={{ mb: 2 }}>
      <Box sx={{ gap: 2 }}>
        <ModeToggle />

        <Button onClick={handleDownload} sx={{ marginLeft: "0.5rem" }}>
          Download
        </Button>
      </Box>
    </ContentWrap>
  )
}

export default TopHeader
