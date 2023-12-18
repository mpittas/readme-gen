import React, { useState, useEffect } from "react"
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-markdown"
import "ace-builds/src-noconflict/theme-github"

interface MarkdownEditorProps {
  onChange: (value: string) => void
  content: string
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  content,
  onChange,
}) => {
  const [editorContent, setEditorContent] = useState(content)

  // Update editor content when `content` prop changes
  useEffect(() => {
    setEditorContent(content)
  }, [content])

  const handleEditorChange = (newContent: string) => {
    setEditorContent(newContent)
    onChange(newContent)
  }

  return (
    <AceEditor
      mode="markdown"
      theme="github"
      name="markdown_editor"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      showGutter={false}
      wrapEnabled={true}
      value={editorContent}
      onChange={handleEditorChange}
    />
  )
}

export default MarkdownEditor
