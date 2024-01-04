import React, { useState, useEffect } from "react"
import { useColorScheme, useTheme } from "@mui/joy/styles"
import { saveAs } from "file-saver"
import Image from "next/image"
import ContentWrap from "../ContentWrap/ContentWrap"
import ModeSwitcher from "../ModeSwitcher/ModeSwitcher"
import ModeSwitcherIcon from "../ModeSwitcher/ModeSwitcherIcon"
import { Button, IconButton, Box, Typography } from "@mui/joy"
import { StyledLink, StyledIconsWrap } from "./TopHeaderStyles"
import DownloadIcon from "@mui/icons-material/Download"

interface TopHeaderProps {
  editorContent: string
}

const TopHeader: React.FC<TopHeaderProps> = ({ editorContent }) => {
  const [isDownloadDisabled, setDownloadDisabled] = useState(true)
  const theme = useTheme()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const queryMd = theme.breakpoints.values.md
  const isLargerThanMd = windowWidth >= queryMd

  useEffect(() => {
    setDownloadDisabled(!editorContent)
  }, [editorContent])

  const handleDownload = () => {
    const blob = new Blob([editorContent], { type: "text/plain;charset=utf-8" })
    saveAs(blob, "readme.md")
  }

  const { mode, setMode } = useColorScheme()

  console.log(theme.breakpoints.values.md)
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
            src={mode === "dark" ? "./logo2-light.svg" : "./logo2-dark.svg"}
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
      <Box>
        {isLargerThanMd ? (
          <StyledIconsWrap>
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
          </StyledIconsWrap>
        ) : (
          <StyledIconsWrap>
            <ModeSwitcherIcon />
            <IconButton
              variant="solid"
              onClick={handleDownload}
              disabled={isDownloadDisabled}
            >
              <DownloadIcon />
            </IconButton>
          </StyledIconsWrap>
        )}
      </Box>
    </ContentWrap>
  )
}

export default TopHeader
