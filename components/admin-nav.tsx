'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function AdminNav() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <Link href="/admin" className="rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
        Dashboard
      </Link>
      <Link href="/admin/signup" className="rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
        Create staff user
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className="rounded-full border border-destructive/30 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
      >
        Logout
      </button>
    </div>
  )
}
