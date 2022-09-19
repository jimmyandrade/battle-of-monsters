import { GlobalStyleRoot } from './GlobalStyle.styles'
import { render } from '@testing-library/react'

describe('Global styles', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<GlobalStyleRoot />)
      expect(container).toMatchSnapshot()
    })
  })
})
