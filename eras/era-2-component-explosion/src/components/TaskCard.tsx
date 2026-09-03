import type { MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/Avatar';
import { StatusPill, type TaskStatus } from '@/components/StatusPill';

export type { TaskStatus };
export type TaskPriority = 'low' | 'medium' | 'high';

type TaskCardProps = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  assigneeName?: string;
  dueDate?: string;
  // `compact` was added for the dashboard redesign; `isCompact` is the original prop
  // from the first version of this component, kept around for older call sites.
  compact?: boolean;
  isCompact?: boolean;
  showDescription?: boolean;
  hideDueDate?: boolean;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  highlightOverdue?: boolean;
  className?: string;
};

export const TaskCard = ({
  id,
  title,
  description,
  status,
  priority,
  assigneeName,
  dueDate,
  compact,
  isCompact,
  showDescription = true,
  hideDueDate = false,
  isSelected = false,
  onSelect,
  highlightOverdue = false,
  className,
}: TaskCardProps) => {
  const dense = compact ?? isCompact ?? false;
  const isOverdue =
    highlightOverdue &&
    status !== 'done' &&
    !!dueDate &&
    new Date(dueDate).getTime() < Date.now();

  const handleClick = (_event: MouseEvent<HTMLDivElement>) => {
    onSelect?.(id);
  };

  return (
    <div
      data-testid="task-card"
      onClick={onSelect ? handleClick : undefined}
      className={cn(
        'rounded-card border bg-white',
        dense ? 'p-3' : 'p-5',
        isOverdue ? 'border-status-blocked' : 'border-brand-border',
        isSelected ? 'ring-2 ring-brand-blue' : '',
        onSelect ? 'cursor-pointer' : '',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className={cn('font-semibold text-brand-ink', dense ? 'text-sm' : 'text-base')}>
          {title}
        </h3>
        <StatusPill status={status} />
      </div>

      {showDescription && description && (
        <p className={cn('mt-2 text-brand-slate', dense ? 'text-xs' : 'text-sm')}>
          {description}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between gap-3">
        {assigneeName ? (
          <div className="flex items-center gap-2">
            <Avatar name={assigneeName} size={dense ? 'sm' : 'md'} />
            <span className="text-xs text-brand-slate">{assigneeName}</span>
          </div>
        ) : (
          <span className="text-xs text-brand-slate">Unassigned</span>
        )}

        {!hideDueDate && dueDate && (
          <span className={cn('text-xs', isOverdue ? 'text-status-blocked' : 'text-brand-slate')}>
            {isOverdue ? 'Overdue' : dueDate}
          </span>
        )}
      </div>

      {priority && (
        <span className="mt-3 inline-block text-xs uppercase tracking-wide text-brand-slate">
          {priority} priority
        </span>
      )}
    </div>
  );
};
