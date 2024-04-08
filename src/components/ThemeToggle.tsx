import { useEffect } from "react"
import { Moon } from "../assets/icons/Moon"
import { Sun } from "../assets/icons/Sun"
import { System } from "../assets/icons/System"

export const ThemeToggle = () => {
  const THEMES = ["Light", "Dark", "System"]
  const onClickToogleBtn = () => {
    const themesMenu = document.getElementById("themes-menu")
    const isClosed = !themesMenu?.classList.contains("hidden")
    themesMenu?.classList[isClosed ? "add" : "remove"]("hidden")
  }
  const onClickMenuOption = (theme: string) => {
    localStorage.setItem("theme", theme.toLowerCase())
    updateTheme()
  }
  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }
  const updateIcon = (themePreference: string) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.classList[element.id !== themePreference ? "add" : "remove"]("hidden")
    })
  }
  const updateTheme = () => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
    const themePreference = getThemePreference()
    const isDark = themePreference === "dark" || (themePreference === "system" && matchMedia.matches)
    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")

  }
  useEffect(()=>{
    updateTheme()
  })
  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="flex transition border-none appearance-none hover:scale-125 dark:text-gray-50"
        onClick={onClickToogleBtn}
      >
        <span className="sr-only">Elige el tema</span>
        <Sun 
          id="light" 
          className="transition-all theme-toggle-icon size-5" 
        />
        <Moon
          id="dark"
          className="transition-all theme-toggle-icon size-5"
        />
        <System
          id="system"
          className="transition-all theme-toggle-icon size-5"
        />
      </button>
      <div
        id="themes-menu"
        className="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
      >
        <ul>
          {
            THEMES.map((theme, index) => (
              <li 
                key={index} 
                onClick={()=>onClickMenuOption(theme)}
                className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm dark:text-gray-50">
                {theme}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
