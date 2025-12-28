import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EventCategoryList } from './event-category-list';

const meta = {
  title: 'Widgets/EventCategoryList/EventCategoryList',
  component: EventCategoryList,
  tags: ['autodocs'],
} satisfies Meta<typeof EventCategoryList>;

export default meta;
type Story = StoryObj<typeof EventCategoryList>;

export const Primary: Story = {};
