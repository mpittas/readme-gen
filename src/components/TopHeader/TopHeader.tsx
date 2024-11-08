import React, { useState, useEffect } from "react";
import { useColorScheme, useTheme } from "@mui/joy/styles";
import { saveAs } from "file-saver";
import Image from "next/image";
import ContentWrap from "../ContentWrap/ContentWrap";
import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";
import ModeSwitcherIcon from "../ModeSwitcher/ModeSwitcherIcon";
import { Button, IconButton, Box, Typography } from "@mui/joy";
import { StyledLink, StyledIconsWrap } from "./TopHeaderStyles";
import DownloadIcon from "@mui/icons-material/Download";

interface TopHeaderProps {
  editorContent: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ editorContent }) => {
  const [isDownloadDisabled, setDownloadDisabled] = useState(true);
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const queryMd = theme.breakpoints.values.md;
  const isLargerThanMd = windowWidth >= queryMd;

  useEffect(() => {
    setDownloadDisabled(!editorContent);
  }, [editorContent]);

  const handleDownload = () => {
    const blob = new Blob([editorContent], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "readme.md");
  };

  const { mode, setMode } = useColorScheme();
  return (
    <ContentWrap
      sx={{
        mb: { xs: 1, sm: 2 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px !important",
        p: { xs: "8px", sm: "12px" },
        flexDirection: "row",
        height: { xs: "48px", sm: "56px" },
        minHeight: "auto",
      }}
    >
      <StyledLink href="https://github.com/mpittas/readme-gen1" target="_blank">
        <Image src="/logo.svg" width={24} height={24} alt="Logo" />
        README.gen
      </StyledLink>

      <StyledIconsWrap>
        <IconButton
          size="sm"
          variant="soft"
          onClick={() => {
            const blob = new Blob([editorContent], { type: "text/markdown" });
            saveAs(blob, "README.md");
          }}
        >
          <DownloadIcon />
        </IconButton>
        <ModeSwitcherIcon />
      </StyledIconsWrap>
    </ContentWrap>
  );
};

export default TopHeader;
