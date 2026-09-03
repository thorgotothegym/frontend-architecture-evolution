import type { Meta, StoryObj } from '@storybook/nextjs';
import { StatusPill } from './StatusPill';

const meta: Meta<typeof StatusPill> = {
  title: 'Components/StatusPill',
  component: StatusPill,
};

export default meta;
type Story = StoryObj<typeof StatusPill>;

export const Todo: Story = { args: { status: 'todo' } };
export const InProgress: Story = { args: { status: 'in-progress' } };
export const Done: Story = { args: { status: 'done' } };
export const Blocked: Story = { args: { status: 'blocked' } };
