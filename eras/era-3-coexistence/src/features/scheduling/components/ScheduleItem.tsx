import { Badge } from '../../../components/Badge';
import type { ScheduleEntry } from '../api/useSchedules';

const statusTone: Record<ScheduleEntry['status'], 'neutral' | 'success' | 'warning'> = {
  upcoming: 'neutral',
  'in-progress': 'warning',
  done: 'success',
};

type ScheduleItemProps = {
  entry: ScheduleEntry;
};

export const ScheduleItem = ({ entry }: ScheduleItemProps) => {
  return (
    <li className="schedule-item">
      <div>
        <p className="schedule-item-title">{entry.title}</p>
        <p className="schedule-item-time">{entry.startsAt}</p>
      </div>
      <Badge label={entry.status} tone={statusTone[entry.status]} />
    </li>
  );
};
