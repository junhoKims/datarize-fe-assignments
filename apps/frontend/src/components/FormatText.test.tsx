import { render } from '@testing-library/react'
import { FormatText } from './FormatText'

describe('FormatText', () => {
  it('"type"이 "price"일 때, 1000 -> ₩1,000원', () => {
    const { container } = render(
      <FormatText type="price" prefix="₩" suffix="원">
        1000
      </FormatText>,
    )
    expect(container.textContent).toBe('₩1,000원')
  })

  it('"type"이 "count"일 때, 1000 -> 1000pt', () => {
    const { container } = render(
      <FormatText type="count" suffix="pt">
        1000
      </FormatText>,
    )
    expect(container.textContent).toBe('1000pt')
  })
})
