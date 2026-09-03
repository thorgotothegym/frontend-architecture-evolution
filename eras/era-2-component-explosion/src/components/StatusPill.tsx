export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked';

type StatusPillProps = {
  status: TaskStatus;
};

const statusLabel: Record<TaskStatus, string> = {
  todo: 'To do',
  'in-progress': 'In progress',
  done: 'Done',
  blocked: 'Blocked',
};

const statusColor: Record<TaskStatus, string> = {
  todo: 'bg-status-todo',
  'in-progress': 'bg-status-progress',
  done: 'bg-status-done',
  blocked: 'bg-status-blocked',
};

export const StatusPill = ({ status }: StatusPillProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-white ${statusColor[status]}`}
    >
      {statusLabel[status]}
    </span>
  );
};
