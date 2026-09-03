import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'FlowDesk · Tasks',
  description: 'Internal task board',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-mist text-brand-ink">{children}</body>
    </html>
  );
}
