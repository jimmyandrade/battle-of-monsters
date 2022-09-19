import type { FC, MeterHTMLAttributes } from 'react'
import { MeterRoot } from './Meter.styles'

export const Meter: FC<MeterHTMLAttributes<HTMLMeterElement>> = (
  {
    value,
    ...props
  }
) => (
  <MeterRoot value={value} {...props} />
)
