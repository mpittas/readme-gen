import Sheet from "@mui/joy/Sheet"
import { SxProps } from "@mui/system"

interface ContentWrapProps {
  sx?: SxProps
  children?: React.ReactNode
}

const ContentWrap = ({ children, sx }: ContentWrapProps) => {
  return (
    <Sheet sx={{ ...sx, p: 2, borderRadius: "md" }} variant="soft">
      {children}
    </Sheet>
  )
}

export default ContentWrap
