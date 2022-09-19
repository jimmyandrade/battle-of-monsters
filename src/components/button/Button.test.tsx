import { Button } from '.'
import { render } from '@testing-library/react'

describe('Button component', () => {
  it('should pass children prop', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    expect(getByRole('button')).toHaveTextContent('Click me')
  })
})
