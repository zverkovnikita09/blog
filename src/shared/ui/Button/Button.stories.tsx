import type { Meta, StoryObj } from '@storybook/react';

import Button, { ThemeButton } from './Button';
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
    theme: ThemeButton.CLEAR
  }
};

export const Outline: Story = {
  args: {
    children: 'Текст',
    theme: ThemeButton.OUTLINE
  }
};

export const OutlineDark: Story = {
  args: {
    children: 'Текст',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};