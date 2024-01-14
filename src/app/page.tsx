"use client"
import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles"
import { defaultTemplate } from "../templates/defaultTemplate"
// import ModeSwitcher from "@/components/ModeSwitcher/page"
import { TestAnim } from "@/components/TestAnim/TestAnim"

const LocalStorageComponent = dynamic(
  () => import("../components/LocalStorage/LocalStorage"),
  { ssr: false }
)

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

export default function Home() {
  const [node, setNode] = React.useState<HTMLElement | null>(null)
  useEnhancedEffect(() => {
    setNode(document.getElementById("mode-toggle"))
  }, [])

  return (
    <main>
      <CssVarsProvider
        colorSchemeNode={node || null}
        colorSchemeSelector="#mode-toggle"
        modeStorageKey="mode-toggle-demo"
      >
        <TestAnim />
        <LocalStorageComponent defaultTemplate={defaultTemplate} />
      </CssVarsProvider>
    </main>
  )
}
