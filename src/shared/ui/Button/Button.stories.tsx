import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Текст'
  }
};

export const PrimaryDark: Story = {
  args: {
    children: 'Текст'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Clear: Story = {
  args: {
    children: 'Текст',
    theme: ButtonTheme.CLEAR
  }
};

export const Outline: Story = {
  args: {
    children: 'Текст',
    theme: ButtonTheme.OUTLINE
  }
};

export const OutlineDark: Story = {
  args: {
    children: 'Текст',
    theme: ButtonTheme.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Текст',
    theme: ButtonTheme.BACKGROUND
  }
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Текст',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
};

export const SizeS: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.S
  }
};

export const SizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M
  }
};

export const SizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L
  }
};

export const SquareS: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.S
  }
};

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M
  }
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L
  }
};