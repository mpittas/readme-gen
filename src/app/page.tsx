"use client"
import React, { useState } from "react"
import { listItems } from "../components/NavList/listItems"
import Typography from "@mui/joy/Typography"

import ContentWrap from "@/components/ContentWrap/page"

import Grid from "@mui/joy/Grid"
import Box from "@mui/joy/Box"
import NavList from "@/components/NavList/page"

import TopHeader from "@/components/TopHeader/page"
import MarkdownEditor from "@/components/MarkdownEditor/page"
import MarkdownPreview from "@/components/MarkdownPreview/page"

interface ListItem {
  text: string
  content: string
}

export default function Home() {
  const [markdown, setMarkdown] = useState<string[]>([])

  const [editorContent, setEditorContent] = useState("")

  const [activeTemplates, setActiveTemplates] = useState<ListItem[]>([])

  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown([...markdown, newMarkdown])
  }

  const handleButtonClick = (template: string) => {
    setEditorContent((prevContent) => prevContent + "\n\n" + template)
  }

  const handleRemove = (template: string) => {
    setEditorContent((prevContent) => prevContent.replace(template, ""))
  }

  const markdownContent = activeTemplates
    .map((template) => template.content)
    .join("\n\n")

  return (
    <main>
      <Box sx={{ p: "20px" }}>
        <TopHeader />
        <Box sx={{}}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <ContentWrap>
                <NavList
                  handleClick={handleButtonClick}
                  handleRemove={handleRemove}
                />
              </ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>
                <MarkdownEditor
                  onChange={setEditorContent}
                  content={editorContent} // Join the markdown strings with two newlines
                />
              </ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>
                <MarkdownPreview markdown={editorContent} />
              </ContentWrap>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </main>
  )
}
