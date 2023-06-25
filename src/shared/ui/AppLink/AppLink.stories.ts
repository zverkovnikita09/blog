import type { Meta, StoryObj } from '@storybook/react';

import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Текст'
  }
};

export const Inverted: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.INVERTED
  }
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Текст'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const InvertedDark: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.INVERTED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};