import React, { useState, useEffect } from "react"
import { useColorScheme, useTheme } from "@mui/joy/styles"
import { saveAs } from "file-saver"
import Image from "next/image"
import ContentWrap from "../ContentWrap/ContentWrap"
import ModeSwitcher from "../ModeSwitcher/ModeSwitcher"
import { Button, Box, Typography } from "@mui/joy"
import { StyledLink } from "./TopHeaderStyles"
import DownloadIcon from "@mui/icons-material/Download"

interface TopHeaderProps {
  editorContent: string
}

const TopHeader: React.FC<TopHeaderProps> = ({ editorContent }) => {
  const [isDownloadDisabled, setDownloadDisabled] = useState(true)

  useEffect(() => {
    setDownloadDisabled(!editorContent)
  }, [editorContent])

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
        borderRadius: "8px !important",
      }}
    >
      <Box>
        <StyledLink href="#">
          <Image
            src={mode === "dark" ? "./logo-light.svg" : "./logo-dark.svg"}
            width={30}
            height={30}
            alt="Logo"
          />
          <Typography
            fontSize="sm"
            textColor={
              mode === "dark"
                ? `${theme.vars.palette.neutral[200]}`
                : `${theme.vars.palette.neutral[700]}`
            }
          >
            Readme.gen
          </Typography>
        </StyledLink>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <ModeSwitcher />
        <Button
          color="neutral"
          variant="solid"
          startDecorator={<DownloadIcon />}
          onClick={handleDownload}
          disabled={isDownloadDisabled}
        >
          <span>Download</span>
        </Button>
      </Box>
    </ContentWrap>
  )
}

export default TopHeader
