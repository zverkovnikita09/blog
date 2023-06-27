import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onClose: () => { },
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt voluptas soluta earum iusto. Deserunt unde vel libero dicta temporibus at ab corrupti fuga quod voluptates possimus quasi, molestiae dolorem.'
  }
};

export const Dark: Story = {
  args: {
    isOpen: true,
    onClose: () => { },
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt voluptas soluta earum iusto. Deserunt unde vel libero dicta temporibus at ab corrupti fuga quod voluptates possimus quasi, molestiae dolorem.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};