import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Monster, MonstersArray } from './Monster.types'

export interface MonstersBattleState {
  computerMonster: Monster | null
  playerMonster: Monster | null
  winnerMonster: Monster | null
}

const initialState: MonstersBattleState = {
  computerMonster: null,
  playerMonster: null,
  winnerMonster: null
}

export const monsterBattleSlice = createSlice({
  name: 'playerMonster',
  initialState,
  reducers: {
    setComputerMonster: (state, action: PayloadAction<MonstersArray>) => {
      const monstersExceptPlayer = action.payload.filter(
        (monster) => monster.id !== state.playerMonster?.id
      )
      const computerMonsterRandomIndex = Math.floor(
        Math.random() * monstersExceptPlayer.length
      )
      state.computerMonster = monstersExceptPlayer[computerMonsterRandomIndex]
    },
    setPlayerMonster: (state, action: PayloadAction<Monster>) => {
      state.winnerMonster = null
      state.computerMonster = null
      state.playerMonster = action.payload
    },
    startBattle: (state) => {
      const { computerMonster, playerMonster } = state

      if (playerMonster === null) {
        return
      }
      // state.computerMonster = getComputerMonster()
      if (computerMonster === null) {
        return
      }

      const playerWins = playerMonster.hp > computerMonster.hp

      state.winnerMonster = playerWins ? playerMonster : computerMonster
    }
  }
})

export const {
  setComputerMonster,
  setPlayerMonster,
  startBattle
} = monsterBattleSlice.actions

export default monsterBattleSlice.reducer
