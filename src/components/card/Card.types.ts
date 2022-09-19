import type { HTMLAttributes, LabelHTMLAttributes } from 'react'

export interface CardBaseProps extends HTMLAttributes<HTMLElement> {
  component?: Omit<keyof JSX.IntrinsicElements, 'label'>
}

export interface CardLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  component: 'label'
  htmlFor: LabelHTMLAttributes<HTMLLabelElement>['htmlFor']
  id: LabelHTMLAttributes<HTMLLabelElement>['id']
}

export type CardProps = CardBaseProps | CardLabelProps
