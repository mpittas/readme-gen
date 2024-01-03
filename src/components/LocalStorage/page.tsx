"use client"
import React, { useState, useEffect } from "react"

import ContentWrap from "@/components/ContentWrap/page"

import { Grid, Box } from "@mui/joy"
import NavList from "@/components/NavList/page"

import TopHeader from "@/components/TopHeader/page"
import MarkdownEditor from "@/components/MarkdownEditor/page"
import MarkdownPreview from "@/components/MarkdownPreview/page"
import { defaultTemplate } from "../../templates/defaultTemplate"

interface ListItem {
  text: string
  content: string
}

interface Template {
  content: string
}

interface LocalStorageProps {
  defaultTemplate: string
}

const LocalStorage: React.FC<LocalStorageProps> = ({ defaultTemplate }) => {
  const [markdown, setMarkdown] = useState<string[]>([])

  const [editorContent, setEditorContent] = useState(() => {
    const savedContent = localStorage.getItem("editorContent")
    return savedContent ? savedContent : defaultTemplate
  })

  const [activeTemplates, setActiveTemplates] = useState(() => {
    const savedTemplates = localStorage.getItem("activeTemplates")
    return savedTemplates ? JSON.parse(savedTemplates) : []
  })

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
    .map((template: Template) => template.content)
    .join("\n\n")

  useEffect(() => {
    localStorage.setItem("editorContent", editorContent)
    localStorage.setItem("activeTemplates", JSON.stringify(activeTemplates))
  }, [editorContent, activeTemplates])

  return (
    <Box sx={{ p: "20px" }}>
      <TopHeader editorContent={editorContent} />
      <Box>
        <Grid container spacing={2}>
          <Grid
            xs={2}
            sx={{
              height: "calc(100vh - 108px)",
              overflow: "hidden",
            }}
          >
            <ContentWrap sx={{ height: "-webkit-fill-available" }}>
              <NavList handleClick={handleButtonClick} />
            </ContentWrap>
          </Grid>
          <Grid
            xs={10}
            sx={{
              height: "calc(100vh - 108px)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex", height: "100%", gap: 2 }}>
              <ContentWrap sx={{ height: "100%", flexBasis: "100%" }}>
                <MarkdownEditor
                  onChange={setEditorContent}
                  content={editorContent}
                />
              </ContentWrap>

              <ContentWrap
                sx={{ height: "100%", overflowY: "auto", flexBasis: "100%" }}
              >
                <MarkdownPreview markdown={editorContent} />
              </ContentWrap>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LocalStorage
