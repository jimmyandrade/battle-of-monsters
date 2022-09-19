import type { Monster } from '../../Monster.types'
import type { CardBaseProps } from '../../../../components/card'

export interface MonsterDetailsCardProps extends CardBaseProps {
  monster: Monster
}
