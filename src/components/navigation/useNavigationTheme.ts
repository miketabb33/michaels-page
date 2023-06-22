import { useTheme } from '../../context/ThemeContext'

export const useNavigationTheme = () => {
  const { theme, toggleTheme } = useTheme()
  const themeButtonText = theme === 'light' ? 'Dark' : 'Light'

  return { themeButtonText, toggleTheme }
}
