import { GlobalStyle } from '.'
import { render } from '@testing-library/react'

describe('GlobalStyle', () => {
  it('should pass children', () => {
    const children = 'children'
    const { getByText } = render(<GlobalStyle>{children}</GlobalStyle>)
    expect(getByText(children)).toHaveTextContent('children')
  })
})
