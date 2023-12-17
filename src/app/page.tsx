import * as React from "react"
import Typography from "@mui/joy/Typography"

import ContentWrap from "@/components/ContentWrap/page"

import Grid from "@mui/joy/Grid"
import Box from "@mui/joy/Box"
import SectionsList from "@/components/SectionsList/page"

import ModeToggle from "@/components/ModeToggle/page"
import TopHeader from "@/components/TopHeader/page"

export default function Home() {
  return (
    <main>
      <Box sx={{ p: "20px" }}>
        <TopHeader />
        <Box sx={{}}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <ContentWrap>
                <Typography
                  level="title-sm"
                  color="neutral"
                  sx={{ textTransform: "uppercase", mb: 1 }}
                >
                  Sections
                </Typography>

                <SectionsList />
              </ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>2</ContentWrap>
            </Grid>
            <Grid xs={5}>
              <ContentWrap>3</ContentWrap>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </main>
  )
}
