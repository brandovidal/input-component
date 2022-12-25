import { Input } from './index'

import { render, screen } from '@testing-library/react'

describe('Input', () => {
  test('should add two numbers', () => {
    render(<Input placeholder="Placeholder" />)

    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined()
  })
})
