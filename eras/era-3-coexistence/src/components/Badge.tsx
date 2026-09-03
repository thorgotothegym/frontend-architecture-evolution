type BadgeProps = {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
};

export const Badge = ({ label, tone = 'neutral' }: BadgeProps) => {
  const className = `badge badge-${tone}`;

  return <span className={className}>{label}</span>;
};
