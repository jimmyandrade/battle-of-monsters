import type { FC } from 'react'
import type { MonsterDetailsCardProps } from './MonsterDetailsCard.types'
import { Meter, MeterRoot } from '../../../../components/meter'
import { Card } from '../../../../components/card'
import styled from 'styled-components'
import { MonsterMeter } from '../MonsterMeter'

const Root = styled(Card)`
  padding: 11px 12px 29px 12px;
`

const Label = styled.label`
  font-size: var(--large-font-size);
`

const MonsterImage = styled.img`
  border-radius: var(--card-border-radius);
  box-shadow: 0 0 10px 0 #00000040;
  min-height: 178px;
  width: 283px;
`

const List = styled.ul`
  display: grid;
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
  row-gap: 11px;
`

const ListItem = styled.li`
  display: grid;
  font-size: 12px;
  line-height: 1.1716em;
  row-gap: 5px;
  
  &:first-child ${MeterRoot} {
    box-shadow: 0 1px 3px 0 #00000040;
  }
`

const MonsterNameHeading = styled.h2`
  border-block-end: 1px solid rgba(0, 0, 0, 0.1);
  margin-block-end: 11px;
  margin-block-start: 14px;
  padding-block-end: 5px;
`

export const MonsterDetailsCard: FC<MonsterDetailsCardProps> = (
  {
    className,
    /**
     * @example `player-monster`
     */
    id,
    monster,
    ...props
  }
) => (
  <Root className={className} id={id} {...props}>
    <Label
      className="screen-reader-only"
      htmlFor="player-monster"
    >
      Player
    </Label>
    <MonsterImage
      alt={`${monster.name} monster`}
      className={`${monster.id}-image`}
      draggable={false}
      height={206}
      src={monster.imageUrl}
      width={283}
    />
    <MonsterNameHeading>{monster.name}</MonsterNameHeading>
    <List>
      <ListItem>
        HP
        <MonsterMeter value={monster.hp} />
      </ListItem>
      <ListItem>
        Attack
        <MonsterMeter value={monster.attack} />
      </ListItem>
      <ListItem>
        Defense
        <MonsterMeter value={monster.defense} />
      </ListItem>
      <ListItem>
        Speed
        <Meter value={monster.speed} />
      </ListItem>
    </List>
  </Root>
)
