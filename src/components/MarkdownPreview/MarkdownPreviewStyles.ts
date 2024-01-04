import { styled } from "@mui/joy/styles"
import { List, ListItemButton, Box } from "@mui/joy"

export const MarkdownPreviewStyles = styled(Box)(({ theme }) => ({
  height: "100%",
  "& .preview": {
    "& pre": {
      padding: 2,
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.neutral[900]
          : theme.palette.neutral[200],
      lineHeight: 1.45,
      marginBottom: "16px",
      marginTop: 0,
      overflow: "auto",
      overflowWrap: "normal",
      whiteSpace: "pre",
      wordBreak: "normal",
      borderRadius: "6px",
      fontSize: 14,
    },
    "& table": {
      borderCollapse: "collapse",
    },
    "& th, & td": {
      border: "1px solid #dfe2e5",
      borderColor:
        theme.palette.mode === "dark"
          ? theme.palette.neutral[700]
          : theme.palette.neutral[400],
      padding: "8px",
    },

    "& code:not(.preview pre code)": {
      backgroundColor: "rgba(27, 31, 35, 0.05)",
      lineHeight: "20.4px",
      margin: 0,
      padding: "0.2em 0.4em",
      wordWrap: "break-word",
    },
    "& .preview pre, & code:not(.preview pre code)": {
      borderRadius: "6px",
      boxSizing: "border-box",
      color: "var(--base-colour)",
      fontFamily: "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
      fontSize: "85%",
    },
  },
}))
