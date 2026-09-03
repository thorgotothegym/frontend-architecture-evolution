import { useQuery } from '@tanstack/react-query';

export type TaskListItem = {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done' | 'blocked';
  priority: 'low' | 'medium' | 'high';
  assigneeName?: string;
  dueDate?: string;
};

// Replaces a hand-rolled fetch hook (useState + useEffect + manual loading/error
// flags — one of several copies of that pattern across the app) with React Query.
const fetchTasks = async (): Promise<TaskListItem[]> => {
  const res = await fetch('/api/tasks');

  if (!res.ok) {
    throw new Error(`Failed to load tasks: ${res.status}`);
  }

  return res.json();
};

export const useTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
};
