import { ChangeEventHandler } from 'react'

export interface Monster {
  id: string
  name: string
  attack: number
  defense: number
  hp: number
  speed: number
  type: string
  imageUrl: string
}

export type MonstersArray = Monster[]

export type MonsterSelectEventHandler = (
  monster: Monster
) => ChangeEventHandler<HTMLInputElement>
