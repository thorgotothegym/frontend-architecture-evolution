type AvatarProps = {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-12 w-12 text-base',
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export const Avatar = ({ name, imageUrl, size = 'md' }: AvatarProps) => {
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <span
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-brand-blue font-medium text-white`}
    >
      {getInitials(name)}
    </span>
  );
};
