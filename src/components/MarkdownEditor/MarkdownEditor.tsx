import React from "react";
import AceEditor from "react-ace";
import { useColorScheme, useTheme } from "@mui/joy/styles";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-gruvbox";

interface MarkdownEditorProps {
  onChange: (value: string) => void;
  content: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  content,
  onChange,
}) => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();

  const handleEditorChange = (newContent: string) => {
    onChange(newContent);
  };

  return (
    <AceEditor
      style={{
        width: "100%",
        height: "100%",
        fontSize: "14px",
      }}
      setOptions={{
        fontSize: "14px",
        showPrintMargin: false,
        showGutter: true,
        highlightActiveLine: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      mode="markdown"
      theme={mode === "light" ? "github" : "gruvbox"}
      name="markdown_editor"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      wrapEnabled={true}
      value={content}
      onChange={handleEditorChange}
    />
  );
};

export default MarkdownEditor;
