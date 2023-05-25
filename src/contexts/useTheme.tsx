import { createContext, useContext } from "react"
import type { ReactNode } from "react"

const ThemeContext = createContext("")

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value="light">
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}