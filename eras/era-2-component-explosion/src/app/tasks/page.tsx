'use client';

import { useState } from 'react';
import { TaskCard } from '@/components/TaskCard';
import { EmptyState } from '@/components/EmptyState';
import type { TaskStatus } from '@/components/StatusPill';

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  assigneeName?: string;
  dueDate?: string;
};

const tasks: Task[] = [
  {
    id: '1',
    title: 'Write release notes',
    description: 'Summarize what shipped this week for the changelog.',
    status: 'todo',
    priority: 'medium',
    assigneeName: 'Priya Nair',
    dueDate: '2026-08-20',
  },
  {
    id: '2',
    title: 'Fix pagination bug on task list',
    description: 'Page size resets to default when filters change.',
    status: 'in-progress',
    priority: 'high',
    assigneeName: 'Marcus Webb',
    dueDate: '2026-09-05',
  },
  {
    id: '3',
    title: 'Review design tokens proposal',
    description: 'Feedback needed before the next component sync.',
    status: 'blocked',
    priority: 'medium',
    assigneeName: 'Priya Nair',
    dueDate: '2026-08-15',
  },
  {
    id: '4',
    title: 'Archive Q2 tasks',
    description: 'Move completed Q2 items out of the active board.',
    status: 'done',
    priority: 'low',
    dueDate: '2026-07-01',
  },
];

export default function TasksPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const archived = tasks.filter((task) => task.status === 'done');

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 p-8">
      <header>
        <h1 className="text-2xl font-semibold text-brand-ink">Tasks</h1>
        <p className="text-sm text-brand-slate">Everything on the board this sprint.</p>
      </header>

      <section className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            priority={task.priority}
            assigneeName={task.assigneeName}
            dueDate={task.dueDate}
            highlightOverdue
            isSelected={selectedId === task.id}
            onSelect={setSelectedId}
          />
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-brand-ink">Archived</h2>
        {archived.length > 0 ? (
          archived.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              compact
              hideDueDate
            />
          ))
        ) : (
          <EmptyState title="Nothing archived yet" description="Completed tasks will show up here." />
        )}
      </section>
    </main>
  );
}
