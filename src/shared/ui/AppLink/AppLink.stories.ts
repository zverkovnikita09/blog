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

export const Secondary: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY
  }
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Текст'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};