import type { FC, HTMLAttributes } from 'react'
import { ContainerRoot } from './Container.styles'

export const Container: FC<HTMLAttributes<HTMLDivElement>> = (
  {
    children,
    ...props
  }
) => (
  <ContainerRoot {...props}>
    {children}
  </ContainerRoot>
)
