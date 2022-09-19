import type { FC } from 'react'
import type {
  Monster,
  MonstersArray,
  MonsterSelectEventHandler
} from '../../Monster.types'
import styled from 'styled-components'
import { MonsterSelectionCard } from '../MonsterSelectionCard'

interface MonsterSelectorProps {
  allMonsters: MonstersArray
  isFetchingMonsters: boolean
  onMonsterSelect: MonsterSelectEventHandler
  playerMonster: Monster | null
}

const List = styled.ul`
  column-gap: 16px;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
`

export const MonsterSelector: FC<MonsterSelectorProps> = (
  {
    allMonsters,
    isFetchingMonsters,
    onMonsterSelect,
    playerMonster
  }
) => (<List>
    {isFetchingMonsters
      ? [...Array(5)].map((_, index) => <li key={index}>
        <label>
          <img
            alt={'Loading image'}
            aria-hidden={true}
            src={'./src/images/loading-monster.png'}
          />
          <span>Loading monster&hellip;</span>
        </label>
      </li>)
      : allMonsters.map((monster) => (
        <MonsterSelectionCard
          key={monster.id}
          isSelected={playerMonster?.id === monster.id}
          monster={monster}
          onSelectMonster={onMonsterSelect(monster)}
        />
      ))}
  </List>)
