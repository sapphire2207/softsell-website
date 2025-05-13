import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Sync theme with system preference and localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null

    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!stored) {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        applyThemeClass(newTheme)
      }
    }

    if (!stored) {
      prefersDarkQuery.addEventListener('change', handleSystemChange)
      const systemPref = prefersDarkQuery.matches ? 'dark' : 'light'
      setTheme(systemPref)
      applyThemeClass(systemPref)
    } else {
      setTheme(stored)
      applyThemeClass(stored)
    }

    return () => prefersDarkQuery.removeEventListener('change', handleSystemChange)
  }, [])

  const applyThemeClass = (theme: 'light' | 'dark') => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyThemeClass(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
