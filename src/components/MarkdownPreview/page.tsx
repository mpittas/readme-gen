import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownPreviewProps {
  markdown: string
}

function MarkdownPreview({ markdown }: { markdown: string }) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>
}

export default MarkdownPreview
