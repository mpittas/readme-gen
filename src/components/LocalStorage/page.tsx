"use client"
import React, { useState, useEffect } from "react"
import { useTheme } from "@mui/joy/styles"

import ContentWrap from "@/components/ContentWrap/page"

import { Grid, Box, Typography } from "@mui/joy"
import NavList from "@/components/NavList/page"

import TopHeader from "@/components/TopHeader/page"
import MarkdownEditor from "@/components/MarkdownEditor/page"
import MarkdownPreview from "@/components/MarkdownPreview/page"

import CollapsibleSection from "../Collapse/page"

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
  const theme = useTheme()

  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

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
            xs={12}
            md={4}
            lg={2}
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                height: "calc(100vh - 108px)",
              },
              overflow: "hidden",
            })}
          >
            <CollapsibleSection
              label="Collapse nav"
              sx={{ height: "-webkit-fill-available" }}
            >
              <ContentWrap>
                <NavList handleClick={handleButtonClick} />
              </ContentWrap>
            </CollapsibleSection>
          </Grid>
          <Grid
            xs={12}
            md={8}
            lg={10}
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                height: "calc(100vh - 108px)",
              },
              overflow: "hidden",
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                height: "100%",
                gap: 2,
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                },
              })}
            >
              <CollapsibleSection
                label="Collapse editor"
                sx={{
                  height: "100%",
                  flexBasis: "100%",
                  [theme.breakpoints.down("md")]: {
                    height: "560px",
                  },
                }}
              >
                <ContentWrap>
                  <MarkdownEditor
                    onChange={setEditorContent}
                    content={editorContent}
                  />
                </ContentWrap>
              </CollapsibleSection>

              <CollapsibleSection
                label="Collapse editor"
                sx={{ height: "100%", flexBasis: "100%" }}
              >
                <ContentWrap
                  sx={{
                    height: "100% !important",
                    overflowY: "auto",
                    flexBasis: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <MarkdownPreview markdown={editorContent} />
                </ContentWrap>
              </CollapsibleSection>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LocalStorage
