"use client"
import React, { useState, useEffect } from "react"

import ContentWrap from "@/components/ContentWrap/page"

import { Grid, Box } from "@mui/joy"
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

  const [savedContent, setSavedContent] = useState("")

  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown([...markdown, newMarkdown])
  }

  const handleEditorChange = (newContent: string) => {
    setEditorContent(newContent)
    localStorage.setItem("editorContent", newContent)
  }

  const updateActiveTemplates = (newTemplates: ListItem[]) => {
    setActiveTemplates(newTemplates)
    localStorage.setItem("activeTemplates", JSON.stringify(newTemplates))
  }

  const handleButtonClick = (content: string) => {
    setEditorContent((prevContent) => prevContent + "\n\n" + content)
  }

  const markdownContent = activeTemplates
    .map((template) => template.content)
    .join("\n\n")

  useEffect(() => {
    setSavedContent(editorContent + "\n\n" + markdownContent)
  }, [editorContent, markdownContent])

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent")
    const savedTemplates = localStorage.getItem("activeTemplates")

    if (savedContent) {
      setEditorContent(savedContent)
    }

    if (savedTemplates) {
      setActiveTemplates(JSON.parse(savedTemplates))
    }
  }, [])

  return (
    <main>
      <Box sx={{ p: "20px" }}>
        <TopHeader />
        <Box sx={{}}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <ContentWrap>
                <NavList handleClick={handleButtonClick} />
              </ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>
                <MarkdownEditor
                  onChange={setEditorContent}
                  content={editorContent}
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
