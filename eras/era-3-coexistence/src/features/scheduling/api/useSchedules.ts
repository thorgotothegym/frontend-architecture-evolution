import { useQuery } from '@tanstack/react-query';

export type ScheduleEntry = {
  id: string;
  title: string;
  startsAt: string;
  status: 'upcoming' | 'in-progress' | 'done';
};

const fetchSchedules = async (): Promise<ScheduleEntry[]> => {
  const res = await fetch('/api/schedules');

  if (!res.ok) {
    throw new Error(`Failed to load schedules: ${res.status}`);
  }

  return res.json();
};

export const useSchedules = () => {
  return useQuery({
    queryKey: ['schedules'],
    queryFn: fetchSchedules,
  });
};
