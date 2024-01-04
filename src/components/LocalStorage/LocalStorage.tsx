"use client"
import React, { useState, useEffect } from "react"
import { useTheme } from "@mui/joy/styles"
import { Grid, Box } from "@mui/joy"
import ContentWrap from "@/components/ContentWrap/ContentWrap"
import NavList from "@/components/NavList/NavList"
import TopHeader from "@/components/TopHeader/TopHeader"
import MarkdownEditor from "@/components/MarkdownEditor/MarkdownEditor"
import MarkdownPreview from "@/components/MarkdownPreview/MarkdownPreview"
import CollapsibleSection from "../Collapse/Collapse"
import { StyledGridItem } from "./LocalStorageStyles"

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

  useEffect(() => {
    localStorage.setItem("editorContent", editorContent)
    localStorage.setItem("activeTemplates", JSON.stringify(activeTemplates))
  }, [editorContent, activeTemplates])

  return (
    <Box sx={{ p: "20px" }}>
      <TopHeader editorContent={editorContent} />
      <Box>
        <Grid container spacing={2}>
          <StyledGridItem xs={12} md={4} lg={2}>
            <CollapsibleSection
              label="Collapse nav"
              sx={{ height: "-webkit-fill-available" }}
            >
              <ContentWrap>
                <NavList handleClick={handleButtonClick} />
              </ContentWrap>
            </CollapsibleSection>
          </StyledGridItem>

          <Grid xs={12} md={8} lg={10}>
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
                    minHeight: 600,
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
