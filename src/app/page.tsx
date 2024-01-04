"use client"
import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles"
import { defaultTemplate } from "../templates/defaultTemplate"
// import ModeSwitcher from "@/components/ModeSwitcher/page"

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
        {/* <ModeSwitcher /> */}
        <LocalStorageComponent defaultTemplate={defaultTemplate} />
      </CssVarsProvider>
    </main>
  )
}
