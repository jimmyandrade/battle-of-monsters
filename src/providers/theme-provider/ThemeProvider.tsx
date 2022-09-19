import type { FC } from 'react'
import type { ThemeProviderProps } from './ThemeProvider.types'

import './ThemeProvider.css'

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children
}) => (
  <>
    {children}
  </>
)
