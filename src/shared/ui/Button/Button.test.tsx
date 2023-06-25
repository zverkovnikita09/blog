import { render, screen } from '@testing-library/react'
import Button, { ButtonTheme } from './Button'
import React from 'react';

describe('Button', () => {
  test('Button render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Проверка</Button>);
    expect(screen.getByText('Проверка')).toBeInTheDocument()
  });

  test('with theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>Проверка</Button>);
    expect(screen.getByText('Проверка')).toHaveClass('clear')
  })
})