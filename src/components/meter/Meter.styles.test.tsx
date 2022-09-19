import { MeterRoot } from './Meter.styles'
import { render } from '@testing-library/react'

describe('Meter styled', () => {
  describe('Root component', () => {
    it('should match snapshot', () => {
      const { container } = render(<MeterRoot />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
