import { Card } from '../../../../components/card'
import type { CardProps } from '../../../../components/card'
import type { FC } from 'react'
import styled from 'styled-components'

const Root = styled(Card)`
  align-items: center;
  text-align: center;
`

export const MonsterEmptyStateCard: FC<CardProps> = (
  {
    children,
    ...props
  }) => (
  <Root {...props}>
    {children}
  </Root>
)
