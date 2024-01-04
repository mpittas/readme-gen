import { SxProps } from "@mui/system"
import { Sheet } from "@mui/joy"

interface ContentWrapProps {
  sx?: SxProps
  children?: React.ReactNode
}

const ContentWrap = ({ children, sx }: ContentWrapProps) => {
  return (
    <Sheet
      sx={{ ...sx, p: 2, borderRadius: "0 0 8px 8px", height: "100%" }}
      variant="soft"
    >
      {children}
    </Sheet>
  )
}

export default ContentWrap
