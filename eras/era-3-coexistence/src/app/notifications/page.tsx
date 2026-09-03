'use client';

import { Badge } from '../../components/Badge';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Notification = {
  id: string;
  message: string;
  tone: 'neutral' | 'success' | 'warning' | 'danger';
  read: boolean;
};

const notifications: Notification[] = [
  { id: '1', message: 'Weekly report is ready', tone: 'neutral', read: false },
  { id: '2', message: 'Payment failed for invoice #4021', tone: 'danger', read: false },
  { id: '3', message: 'Storage usage above 80%', tone: 'warning', read: true },
  { id: '4', message: 'Team member invite accepted', tone: 'success', read: true },
];

export default function NotificationsPage() {
  const [hideRead, setHideRead] = useLocalStorage('notifications.hideRead', false);

  const visible = hideRead
    ? notifications.filter((notification) => !notification.read)
    : notifications;

  return (
    <div className="notifications-page">
      <header className="notifications-header">
        <h1>Notifications</h1>
        <label>
          <input
            type="checkbox"
            checked={hideRead}
            onChange={(e) => setHideRead(e.target.checked)}
          />
          Hide read
        </label>
      </header>

      <ul className="notifications-list">
        {visible.map((notification) => (
          <li key={notification.id} className="notifications-list-item">
            <Badge label={notification.tone} tone={notification.tone} />
            <span>{notification.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
