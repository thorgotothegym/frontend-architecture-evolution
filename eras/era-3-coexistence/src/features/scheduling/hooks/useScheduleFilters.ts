import { useState } from 'react';
import type { ScheduleEntry } from '../api/useSchedules';

export const useScheduleFilters = (entries: ScheduleEntry[] | undefined) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<ScheduleEntry['status'] | 'all'>('all');

  const filtered = (entries ?? []).filter((entry) => {
    const matchesSearch = entry.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = status === 'all' || entry.status === status;

    return matchesSearch && matchesStatus;
  });

  return { search, setSearch, status, setStatus, filtered };
};
