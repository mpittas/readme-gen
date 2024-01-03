"use client"
import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles"
import { defaultTemplate } from "../templates/defaultTemplate"
import Button from "@mui/joy/Button"

const LocalStorageComponent = dynamic(
  () => import("../components/LocalStorage/page"),
  { ssr: false }
)

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Button
      variant="soft"
      color="neutral"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? "Turn light" : "Turn dark"}
    </Button>
  )
}

export default function Home() {
  const [node, setNode] = React.useState<HTMLElement | null>(null)
  useEnhancedEffect(() => {
    setNode(document.getElementById("mode-toggle"))
  }, [])

  return (
    <main>
      <CssVarsProvider
        // the props below are specific to this demo,
        // you might not need them in your app.
        //
        // the element to apply [data-joy-color-scheme] attribute.
        colorSchemeNode={node || null}
        //
        // the selector to apply the CSS theme variables stylesheet.
        colorSchemeSelector="#mode-toggle"
        //
        // the local storage key to use.
        modeStorageKey="mode-toggle-demo"
      >
        <ModeSwitcher />
        <LocalStorageComponent defaultTemplate={defaultTemplate} />
      </CssVarsProvider>
    </main>
  )
}
