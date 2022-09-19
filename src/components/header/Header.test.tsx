import { Header } from '.'
import { render } from '@testing-library/react'

describe('Header component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
