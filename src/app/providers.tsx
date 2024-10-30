'use client'
import { PropsWithChildren } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
