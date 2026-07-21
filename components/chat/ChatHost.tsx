"use client"

import React, { useEffect, useState, useRef } from 'react'

type Message = { role: 'user' | 'assistant' | 'system'; content: string }

export default function ChatHost({ openOnLoad = false }: { openOnLoad?: boolean }) {
  const [open, setOpen] = useState<boolean>(openOnLoad)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'You are an assistant for NakelGreen. Answer concisely and helpfully.' },
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const streamController = useRef<ReadableStreamDefaultReader | null>(null)

  useEffect(() => {
    if (openOnLoad) setOpen(true)
  }, [openOnLoad])

  async function sendMessage(text: string) {
    if (!text.trim()) return
    setError(null)
    const newUser: Message = { role: 'user', content: text }
    setMessages((m) => [...m, newUser])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newUser] }),
      })

      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Chat API error')
      }

      // stream response
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantText = ''
      setMessages((m) => [...m, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        assistantText += chunk
        setMessages((m) => {
          const last = m[m.length - 1]
          const updated = [...m.slice(0, -1), { ...(last || { role: 'assistant', content: '' }), content: assistantText }]
          return updated
        })
      }

      // finalize
      streamController.current = null
    } catch (err: any) {
      console.error(err)
      setError(err?.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  function onSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      <div className="fixed right-6 bottom-6 z-50">
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg hover:scale-105 focus:outline-none"
        >
          Chat
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="relative mx-4 mb-6 w-full max-w-2xl rounded-2xl bg-background shadow-2xl sm:mb-0">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 className="text-lg font-semibold">NakelGreen Chat</h3>
              <div className="flex items-center gap-2">
                <button
                  className="text-sm text-muted-foreground"
                  onClick={() => {
                    setMessages([{ role: 'system', content: messages[0]?.content || '' }])
                  }}
                >
                  Clear
                </button>
                <button
                  className="text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'mb-3 text-right' : 'mb-3 text-left'}>
                  <div
                    className={`inline-block max-w-[80%] rounded-xl px-4 py-2 leading-relaxed ${
                      m.role === 'user' ? 'bg-primary/10 text-foreground' : 'bg-card text-foreground'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <p className="mt-2 text-sm text-muted-foreground">Thinking…</p>}
              {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
            </div>

            <form onSubmit={onSubmit} className="border-t border-border px-4 py-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question or describe what you need…"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
