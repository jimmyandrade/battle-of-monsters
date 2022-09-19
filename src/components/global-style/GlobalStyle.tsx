import type { FC } from 'react'
import type { GlobalStyleProps } from './GlobalStyle.types'
import { GlobalStyleRoot } from './GlobalStyle.styles'

export const GlobalStyle: FC<GlobalStyleProps> = (
  {
    children
  }
) => (
  <>
    <GlobalStyleRoot />
    {children}
  </>
)
