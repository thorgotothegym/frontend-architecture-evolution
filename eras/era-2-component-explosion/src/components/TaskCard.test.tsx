import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { TaskCard } from './TaskCard';

const baseProps = {
  id: 'task-1',
  title: 'Write release notes',
  description: 'Summarize what shipped this week.',
  status: 'todo' as const,
};

describe('TaskCard', () => {
  it('renders the title and description by default', () => {
    render(<TaskCard {...baseProps} />);
    expect(screen.getByText('Write release notes')).toBeInTheDocument();
    expect(screen.getByText('Summarize what shipped this week.')).toBeInTheDocument();
  });

  it('hides the description when showDescription is false', () => {
    render(<TaskCard {...baseProps} showDescription={false} />);
    expect(screen.queryByText('Summarize what shipped this week.')).not.toBeInTheDocument();
  });

  it('applies compact padding when compact is true', () => {
    render(<TaskCard {...baseProps} compact />);
    expect(screen.getByTestId('task-card')).toHaveClass('p-3');
  });

  it('applies compact padding when the legacy isCompact prop is true', () => {
    render(<TaskCard {...baseProps} isCompact />);
    expect(screen.getByTestId('task-card')).toHaveClass('p-3');
  });

  it('shows an overdue indicator for a past due date that is not done', () => {
    render(<TaskCard {...baseProps} dueDate="2020-01-01" highlightOverdue status="todo" />);
    expect(screen.getByText('Overdue')).toBeInTheDocument();
  });

  it('does not show an overdue indicator once the task is done', () => {
    render(<TaskCard {...baseProps} dueDate="2020-01-01" highlightOverdue status="done" />);
    expect(screen.queryByText('Overdue')).not.toBeInTheDocument();
  });

  it('calls onSelect with the task id when clicked', () => {
    const onSelect = vi.fn();
    render(<TaskCard {...baseProps} onSelect={onSelect} />);
    fireEvent.click(screen.getByTestId('task-card'));
    expect(onSelect).toHaveBeenCalledWith('task-1');
  });
});
