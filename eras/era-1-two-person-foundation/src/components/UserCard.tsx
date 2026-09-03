import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';

type User = {
  name: string;
  email: string;
  avatarUrl: string;
  joinedAt: string;
};

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded border border-border p-4">
      <Image
        src={user.avatarUrl}
        alt={user.name}
        className="rounded-full"
        width={64}
        height={64}
      />
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-foreground/80">{user.email}</p>
        <p className="text-xs text-foreground/60">Joined {formatDate(user.joinedAt)}</p>
      </div>
    </div>
  );
};
