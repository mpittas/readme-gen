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
  const handleEditorChange = (newContent: string) => {
    onChange(newContent)
    localStorage.setItem("editorContent", newContent)
  }

  return (
    <AceEditor
      mode="markdown"
      theme="github"
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
