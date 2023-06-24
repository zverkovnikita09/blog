import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import style from './ThemeSwitcher.module.scss'

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {
    className: style[Theme.DARK]
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
