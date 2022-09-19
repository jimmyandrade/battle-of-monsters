import { render } from '@testing-library/react'
import { AlertRoot } from './Alert.styles'

describe('Alert styles', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<AlertRoot />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
