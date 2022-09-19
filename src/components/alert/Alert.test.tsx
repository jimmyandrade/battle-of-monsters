import { Alert } from '.'
import { render } from '@testing-library/react'

describe('Alert component', () => {
  it('should pass the className prop', () => {
    const className = 'test'
    const { container } = render(<Alert className={className} />)
    expect(container.firstChild).toHaveClass(className)
  })
})
