import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EventSiteLink } from './event-site-link';

const meta = {
  title: 'Entities/EventSite/EventSiteLink',
  component: EventSiteLink,
  tags: ['autodocs'],
} satisfies Meta<typeof EventSiteLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    site: {
      id: 'id',
      title: 'Site Title',
      genre: 'お笑い',
      makeSearchUrl: () => 'https://example.com',
    },
  },
};
