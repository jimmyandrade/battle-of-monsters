import type { ButtonHTMLAttributes, FC } from 'react'
import { ButtonRoot } from './Button.styles'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  {
    children,
    ...props
  }
) => {
  return (
    <ButtonRoot {...props}>
      {children}
    </ButtonRoot>
  )
}
