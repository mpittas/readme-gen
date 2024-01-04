import React from "react"
import AceEditor from "react-ace"
import { useColorScheme, useTheme } from "@mui/joy/styles"

import "ace-builds/src-noconflict/mode-markdown"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-gruvbox"

interface MarkdownEditorProps {
  onChange: (value: string) => void
  content: string
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  content,
  onChange,
}) => {
  const { mode, setMode } = useColorScheme()
  const theme = useTheme()

  const handleEditorChange = (newContent: string) => {
    onChange(newContent)
    localStorage.setItem("editorContent", newContent)
  }

  return (
    <AceEditor
      style={{
        minHeight: "500px",
        height: "100%",
      }}
      mode="markdown"
      theme={mode === "light" ? "github" : "gruvbox"}
      name="markdown_editor"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      // showGutter={false}
      wrapEnabled={true}
      value={content}
      onChange={handleEditorChange}
      setOptions={{
        fontSize: "14px",
      }}
    />
  )
}

export default MarkdownEditor
