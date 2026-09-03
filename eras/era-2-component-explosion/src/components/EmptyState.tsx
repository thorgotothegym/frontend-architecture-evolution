import type { ReactNode } from 'react';

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export const EmptyState = ({ title, description, icon }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-brand-border p-10 text-center">
      {icon}
      <p className="font-medium text-brand-ink">{title}</p>
      {description && <p className="text-sm text-brand-slate">{description}</p>}
    </div>
  );
};
