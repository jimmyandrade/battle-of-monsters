import type { CardProps } from './Card.types'
import type { FC } from 'react'
import { CardRoot } from './Card.styles'

export const Card: FC<CardProps> = ({
  component = 'div',
  className,
  id,
  ...props
}) => (
  <CardRoot as={component} className={className} id={id} {...props} />
)
