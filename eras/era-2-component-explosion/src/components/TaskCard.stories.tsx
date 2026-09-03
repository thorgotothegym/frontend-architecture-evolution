import type { Meta, StoryObj } from '@storybook/nextjs';
import { TaskCard } from './TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Components/TaskCard',
  component: TaskCard,
  args: {
    id: 'task-1',
    title: 'Write release notes',
    description: 'Summarize what shipped this week for the changelog.',
    status: 'todo',
    priority: 'medium',
    assigneeName: 'Priya Nair',
    dueDate: '2026-09-01',
  },
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {};
export const Compact: Story = { args: { compact: true } };
export const Overdue: Story = { args: { dueDate: '2020-01-01', highlightOverdue: true } };
export const Selected: Story = { args: { isSelected: true } };
export const Blocked: Story = {
  args: { status: 'blocked', description: 'Waiting on design sign-off.' },
};
