import { HeaderRoot } from './Header.styles'
import { render } from '@testing-library/react'

describe('Header styles', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<HeaderRoot />)
      expect(container).toMatchSnapshot()
    })
  })
})
