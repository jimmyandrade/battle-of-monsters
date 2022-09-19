import { render } from '@testing-library/react'
import { ButtonRoot } from './Button.styles'

describe('Button styles', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<ButtonRoot />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
