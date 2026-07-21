import React from 'react'
import { readChats } from '@/lib/chat-storage'

export default async function AdminChatsPage() {
  const chats = await readChats(50)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chat Conversations</h1>
      <div className="space-y-4">
        {chats.map((c) => (
          <div key={c.id} className="rounded-md border p-4">
            <div className="mb-2 text-sm text-muted-foreground">{new Date(c.createdAt).toLocaleString()}</div>
            <div className="space-y-2">
              {c.messages.map((m: any, i: number) => (
                <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div className="inline-block rounded-md bg-card px-3 py-2">{m.content}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
