import styled from 'styled-components'

export const CardRoot = styled.div`
  
  background-color: #FFFFFF;
  border: 1px solid transparent;
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  display: block;
  flex-direction: column;
  position: relative;
  
  @media (prefers-reduced-motion: no-preference) {
    transition-duration: var(--micro-animation-duration);
    transition-timing-function: ease-in-out;
    transition-property: border-color, box-shadow;
  }
`
