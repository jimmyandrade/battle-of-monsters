import { render } from '@testing-library/react'
import { Card } from './Card'

describe('Card styles', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<Card />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
