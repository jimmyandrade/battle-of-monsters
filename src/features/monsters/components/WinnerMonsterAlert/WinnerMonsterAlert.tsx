import type { Monster } from '../../Monster.types'
import type { FC } from 'react'
import { Alert } from '../../../../components/alert'

interface WinnerMonsterAlertProps {
  winnerMonster: Monster | null
}

export const WinnerMonsterAlert: FC<WinnerMonsterAlertProps> = (
  {
    winnerMonster
  }
) => {
  if (winnerMonster === null) {
    return null
  }

  return (
    <Alert>{winnerMonster.name} wins!</Alert>
  )
}
