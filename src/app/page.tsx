import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { defaultTemplate } from "../templates/defaultTemplate"

const LocalStorageComponent = dynamic(
  () => import("../components/LocalStorage/page"),
  { ssr: false }
)

export default function Home() {
  const defaultTemplate = "Your default template here"

  return (
    <main>
      <LocalStorageComponent defaultTemplate={defaultTemplate} />
    </main>
  )
}
