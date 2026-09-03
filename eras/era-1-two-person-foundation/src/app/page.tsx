'use client';

import { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/Modal';
import { UserCard } from '@/components/UserCard';

type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  joinedAt: string;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useFetch('/api/users');
  const users = data as User[] | null;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 p-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Team Directory</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
      </header>

      {isLoading && <p className="text-sm text-foreground/60">Loading users...</p>}
      {error && <p className="text-sm text-red-600">Something went wrong: {error.message}</p>}

      <div className="flex flex-col gap-3">
        {users?.map((user) => <UserCard key={user.id} user={user} />)}
      </div>

      <Modal isOpen={isModalOpen} title="Add User" onClose={() => setIsModalOpen(false)}>
        <p>Form goes here.</p>
      </Modal>
    </main>
  );
}
