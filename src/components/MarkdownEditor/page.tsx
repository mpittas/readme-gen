import React from "react"
import AceEditor from "react-ace"
import { useColorScheme } from "@mui/joy/styles"

import "ace-builds/src-noconflict/mode-markdown"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-ambiance"

interface MarkdownEditorProps {
  onChange: (value: string) => void
  content: string
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  content,
  onChange,
}) => {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  const handleEditorChange = (newContent: string) => {
    onChange(newContent)
    localStorage.setItem("editorContent", newContent)
  }

  return (
    <AceEditor
      style={{ height: "100%" }}
      mode="markdown"
      theme={mode === "light" ? "github" : "ambiance"}
      name="markdown_editor"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      // showGutter={false}
      wrapEnabled={true}
      value={content}
      onChange={handleEditorChange}
    />
  )
}

export default MarkdownEditor
