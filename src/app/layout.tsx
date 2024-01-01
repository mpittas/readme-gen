import { CssVarsProvider } from "@mui/joy/styles"
import CssBaseline from "@mui/joy/CssBaseline"

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "README.gen",
  description: "Readme.md generator for your Github project",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CssVarsProvider defaultMode="system">
        <CssBaseline />
        <body>{children}</body>
      </CssVarsProvider>
    </html>
  )
}
