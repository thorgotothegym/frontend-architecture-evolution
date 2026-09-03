import { NextResponse } from 'next/server';

const users = [
  {
    id: '1',
    name: 'Ava Thompson',
    email: 'ava@example.com',
    avatarUrl: 'https://i.pravatar.cc/64?u=ava',
    joinedAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Ben Carter',
    email: 'ben@example.com',
    avatarUrl: 'https://i.pravatar.cc/64?u=ben',
    joinedAt: '2024-03-02',
  },
  {
    id: '3',
    name: 'Chloe Martin',
    email: 'chloe@example.com',
    avatarUrl: 'https://i.pravatar.cc/64?u=chloe',
    joinedAt: '2024-06-20',
  },
];

export async function GET() {
  return NextResponse.json(users);
}
