import styled from 'styled-components'

export const MeterRoot = styled.meter`
  min-width: var(--meter-base-width);
  width: 100%;
  
  &, &::-webkit-meter-bar {
    background-color: var(--meter-background-color);
    border-radius: var(--meter-border-radius);
    border-width: 0;
    height: var(--meter-base-height);
    max-width: var(--meter-base-width);
    min-height: var(--meter-base-height);
  }
  
  &::-webkit-meter-optimum-value {
    background-color: #00FF00;
  }
  
  @media (prefers-reduced-transparency: no-preference) {
    &::-webkit-meter-bar, &::-webkit-meter-optimum-value {
      -webkit-transition-timing-function: ease-in-out;
      -webkit-transition-duration: var(--micro-animation-duration);
      -webkit-transition-property: width;
    }
  }
`
