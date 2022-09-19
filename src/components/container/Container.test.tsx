import { Container } from '.'
import { render } from '@testing-library/react'

describe('Container', () => {
  it('should pass children prop', () => {
    const children = 'test'
    const { getByText } = render(<Container>{children}</Container>)
    expect(getByText(children)).toBeDefined()
  })
})
