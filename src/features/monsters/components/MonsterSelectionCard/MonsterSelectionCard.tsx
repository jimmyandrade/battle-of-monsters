import type { FC } from 'react'
import type { MonsterSelectionCardProps } from './MonsterSelectionCard.types'
import { Card } from '../../../../components/card'
import styled from 'styled-components'

const RootListElement = styled.li`
  display: block;
  position: relative;
`

const CardLabel = styled(Card)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 139px;
  padding-block-start: 6px;
  padding-block-end: 8px;
  padding-inline: 6px;
  row-gap: 7px;
  width: 150px;
  
  & > img {
    border-radius: var(--card-border-radius);
    height: 99px;
    width: 136px;
  }
`

const Input = styled.input`
  cursor: pointer;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  
  &:checked + ${CardLabel} {
    border-color: var(--active-border-color);
  }
  
  &:focus-visible + ${CardLabel} {
    outline: auto 1px Highlight;
    outline: auto 1px -webkit-focus-ring-color;
  }
  
  &:not(:checked):hover + ${CardLabel} {
    border-color: #00000040;
  }
  
  &:active + ${CardLabel} {
    border-color: var(--active-border-color);
    box-shadow: none;
  }
`

export const MonsterSelectionCard: FC<MonsterSelectionCardProps> = (
  {
    isSelected,
    monster,
    onSelectMonster
  }) => (
  <RootListElement>
    <Input
      id={monster.id}
      checked={isSelected}
      onChange={onSelectMonster}
      name="monster"
      required={true}
      type="radio"
      value={monster.id}
    />
    <CardLabel component={'label'} htmlFor={monster.id}>
      <img
        alt={`${monster.name} monster`}
        aria-hidden={true}
        className={`${monster.id}-image`}
        src={monster.imageUrl}
      />
      {monster.name}
    </CardLabel>
  </RootListElement>
)
