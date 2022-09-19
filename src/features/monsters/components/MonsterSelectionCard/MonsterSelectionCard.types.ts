import type { Monster } from '../../Monster.types'
import type { InputHTMLAttributes } from 'react'

export interface MonsterSelectionCardProps {
  isSelected: InputHTMLAttributes<HTMLInputElement>['checked']
  monster: Monster
  onSelectMonster: InputHTMLAttributes<HTMLInputElement>['onChange']
}
