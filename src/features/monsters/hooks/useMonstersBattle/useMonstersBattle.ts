import { useFetchMonstersQuery } from '../../monsters-api-slice'
import type { FormEventHandler } from 'react'
import type { Monster, MonsterSelectEventHandler } from '../../Monster.types'
import { MonstersArray } from '../../Monster.types'
import { RootState } from '../../../../app/store'
import {
  setComputerMonster,
  setPlayerMonster,
  startBattle
} from '../../monsters-battle-slice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

interface ReturnType {
  allMonsters: MonstersArray
  computerMonster: Monster | null
  isFetchingMonsters: boolean
  handleStartBattle: FormEventHandler<HTMLFormElement>
  onMonsterSelect: MonsterSelectEventHandler
  playerMonster: Monster | null
  winnerMonster: Monster | null
}

type UseMonstersBattleApi = () => ReturnType

export const useMonstersBattle: UseMonstersBattleApi = () => {
  const {
    data: allMonsters = [],
    isFetching: isFetchingMonsters
  } = useFetchMonstersQuery()

  const dispatch = useAppDispatch()
  const {
    computerMonster, playerMonster, winnerMonster
  } = useAppSelector(({ monstersBattle }: RootState) => monstersBattle)

  const handleStartBattle: ReturnType['handleStartBattle'] = (event) => {
    event.preventDefault()
    dispatch(setComputerMonster(allMonsters))
    dispatch(startBattle())
  }

  const onMonsterSelect: ReturnType['onMonsterSelect'] = (monster) => () => {
    dispatch(setPlayerMonster(monster))
  }

  return {
    allMonsters,
    computerMonster,
    isFetchingMonsters,
    handleStartBattle,
    onMonsterSelect,
    playerMonster,
    winnerMonster
  }
}
