import { render } from '@testing-library/react'
import { ContainerRoot } from './Container.styles'

describe('Container styled', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<ContainerRoot />)
      expect(container).toMatchSnapshot()
    })
  })
})
