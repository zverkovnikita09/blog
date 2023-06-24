import { type StoryFn } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';

/* eslint-disable */
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return <div className={`app ${theme}`}>
    <Story />
  </div>
}