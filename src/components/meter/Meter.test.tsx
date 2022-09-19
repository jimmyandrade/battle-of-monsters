import { Meter, MeterRoot } from '.'
import { render } from '@testing-library/react'

describe('Meter component', () => {
  it('should pass value prop to meter element', () => {
    const { getByTestId } = render(<Meter data-testid={'meter'} value={50} />)
    expect(getByTestId('meter')).toHaveAttribute('value', '50')
  })
  it('should export MeterRoot component', () => {
    expect(MeterRoot).toBeDefined()
  })
})
