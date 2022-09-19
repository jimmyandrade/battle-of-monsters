import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MonstersArray } from './Monster.types'

const MONSTERS_API_KEY = 'YOUR_API_KEY_HERE'

export const monstersApiSlice = createApi({
  reducerPath: 'monstersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BASE_URL,
    prepareHeaders (headers) {
      headers.set('x-api-key', MONSTERS_API_KEY)
      return headers
    }
  }),
  endpoints (builder) {
    return {
      /* eslint-disable-next-line @typescript-eslint/no-invalid-void-type --
       * Using `void` to explain to RTK that no parameters will be passed
       * to the query.
       */
      fetchMonsters: builder.query<MonstersArray, void>({
        query () {
          return '/monsters.json'
        }
      })
    }
  }
})

export const { useFetchMonstersQuery } = monstersApiSlice
