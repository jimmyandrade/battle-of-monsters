import type { FC, MeterHTMLAttributes } from 'react'
import { Meter } from '../../../../components/meter'

export const MonsterMeter: FC<MeterHTMLAttributes<HTMLMeterElement>> = (
  {
    max = 283,
    min = 0,
    value
  }
) => (
  <Meter max={max} min={min} value={value}>{value} of {max}</Meter>
)
