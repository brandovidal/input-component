import { Input } from './index'

import { fireEvent, render, screen } from '@testing-library/react'

describe('Input', () => {
  beforeEach(() => {
    render(<Input placeholder='Placeholder' value='default' />)
  })

  test('should show placeholder render in the input', () => {
    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined()
  })

  test('should show value render in the input', () => {
    expect(screen.getByDisplayValue('default')).toBeDefined()
  })

  test('should show value change in the input', () => {
    const input: HTMLInputElement = screen.getByTestId(/default/i)

    fireEvent.change(input, { target: { value: 'edit' } })
    expect(screen.getByDisplayValue('edit')).toBeDefined()
  })
})
