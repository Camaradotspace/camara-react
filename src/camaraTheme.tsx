import React from 'react'
import { ThemeProvider as CamaraThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles'
import { lightTheme, darkTheme } from './theme'

interface ICamaraTheme {
  children: React.ReactNode
  theme?: 'light' | 'dark'
}

const CamaraTheme: React.FunctionComponent<ICamaraTheme> = ({
  children,
  theme
}) => {
  return (
    <CamaraThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </CamaraThemeProvider>
  )
}

export default CamaraTheme
