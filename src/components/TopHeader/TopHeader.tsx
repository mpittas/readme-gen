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
  const theme = useTheme();
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
          disabled={!editorContent}
        >
          <DownloadIcon />
        </IconButton>
        <ModeSwitcherIcon />
      </StyledIconsWrap>
    </ContentWrap>
  );
};

export default TopHeader;
