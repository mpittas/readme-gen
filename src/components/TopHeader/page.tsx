import ContentWrap from "../ContentWrap/page"
import ModeToggle from "../ModeToggle/page"

function TopHeader() {
  return (
    <ContentWrap sx={{ mb: 2 }}>
      <ModeToggle />
    </ContentWrap>
  )
}

export default TopHeader
