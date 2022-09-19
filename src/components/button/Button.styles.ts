import styled from 'styled-components'

export const ButtonRoot = styled.button`
  
  background-color: var(--primary-color);
  border: 0 none transparent;
  box-shadow: 0 4px 4px 0 #00000040;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  font-weight: inherit;
  min-height: 45px;
  min-width: 150px;
  padding-block: 12px;
  padding-inline: 30px;

  &:disabled {
    background-color: #799A82;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition-duration: var(--micro-animation-duration);
    transition-timing-function: ease-in-out;
    transition-property: box-shadow;
  }

  &:active:not(:disabled) {
    box-shadow: none;
  }
`
