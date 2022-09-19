import type { FC, HTMLAttributes } from 'react'
import { AlertRoot } from './Alert.styles'

export const Alert: FC<HTMLAttributes<HTMLDivElement>> = (
  {
    'aria-live': ariaLive = 'polite',
    className,
    ...props
  }) => (
  <AlertRoot aria-live={ariaLive} className={className} {...props} />
)
