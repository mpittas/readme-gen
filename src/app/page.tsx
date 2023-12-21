"use client"
import React, { useState } from "react"
import Typography from "@mui/joy/Typography"

import ContentWrap from "@/components/ContentWrap/page"

import Grid from "@mui/joy/Grid"
import Box from "@mui/joy/Box"
import NavList from "@/components/NavList/page"

import ModeToggle from "@/components/ModeToggle/page"
import TopHeader from "@/components/TopHeader/page"
import MarkdownEditor from "@/components/MarkdownEditor/page"
import MarkdownPreview from "@/components/MarkdownPreview/page"

export default function Home() {
  const [markdown, setMarkdown] = useState("")

  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown(newMarkdown)
  }

  return (
    <main>
      <Box sx={{ p: "20px" }}>
        <TopHeader />
        <Box sx={{}}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <ContentWrap>
                <Typography
                  level="title-sm"
                  color="neutral"
                  sx={{ textTransform: "uppercase", mb: 1 }}
                >
                  Sections
                </Typography>

                <NavList />
              </ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>
                <MarkdownEditor
                  onChange={handleMarkdownChange}
                  content={markdown}
                />
              </ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>
                <MarkdownPreview markdown={markdown} />
              </ContentWrap>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </main>
  )
}
