'use client';

import { useSchedules } from '../api/useSchedules';
import { useScheduleFilters } from '../hooks/useScheduleFilters';
import { ScheduleItem } from './ScheduleItem';

export const ScheduleList = () => {
  const { data, isLoading, error } = useSchedules();
  const { search, setSearch, status, setStatus, filtered } = useScheduleFilters(data);

  if (isLoading) return <p>Loading schedule...</p>;
  if (error) return <p>Couldn&apos;t load schedule.</p>;

  return (
    <div className="schedule-list">
      <div className="schedule-list-filters">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as typeof status)}
        >
          <option value="all">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <ul>
        {filtered.map((entry) => (
          <ScheduleItem key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};
