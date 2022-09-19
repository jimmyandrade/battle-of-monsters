import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type --
 * No need of returning type on function, it's inferred from the return value.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
