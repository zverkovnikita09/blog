import { render, screen } from '@testing-library/react'
import Button, { ThemeButton } from './Button'
import React from 'react';

describe('Button', () => {
  test('Button render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Проверка</Button>);
    expect(screen.getByText('Проверка')).toBeInTheDocument()
  });

  test('with theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>Проверка</Button>);
    expect(screen.getByText('Проверка')).toHaveClass('clear')
  })
})