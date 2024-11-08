import { SxProps } from "@mui/system";
import { Sheet } from "@mui/joy";

interface ContentWrapProps {
  sx?: SxProps;
  children?: React.ReactNode;
}

const ContentWrap = ({ children, sx }: ContentWrapProps) => {
  return (
    <Sheet
      sx={{
        p: { xs: 1, sm: 2 },
        borderRadius: "0 0 8px 8px",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      variant="soft"
    >
      {children}
    </Sheet>
  );
};

export default ContentWrap;
