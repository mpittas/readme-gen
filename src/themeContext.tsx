import * as React from "react"

type ThemeContextType = {
  mode: string
  setMode: (value: string) => void
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
)
