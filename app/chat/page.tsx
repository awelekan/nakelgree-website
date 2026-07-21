import ChatHost from '@/components/chat/ChatHost'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat',
  description: 'NakelGreen assistant chat',
}

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <ChatHost openOnLoad />
    </div>
  )
}
