import { configureStore } from '@reduxjs/toolkit'
import { monstersApiSlice } from '../features/monsters/monsters-api-slice'
import monstersBattleReducer from '../features/monsters/monsters-battle-slice'

export const store = configureStore({
  reducer: {
    [monstersApiSlice.reducerPath]: monstersApiSlice.reducer,
    monstersBattle: monstersBattleReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(monstersApiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
