'use client'

import { useState } from 'react'

interface AdminSubmission {
  id: string
  formType: string
  submittedAt: string
  name?: string
  email?: string
  phone?: string
  program?: string
  skill?: string
  experience?: string
  availability?: string
  interest?: string
  event?: string
  message?: string
}

interface AdminSubmissionsProps {
  initialSubmissions: AdminSubmission[]
  canManage?: boolean
}

export function AdminSubmissions({ initialSubmissions, canManage = false }: AdminSubmissionsProps) {
  const [submissions, setSubmissions] = useState(initialSubmissions)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [drafts, setDrafts] = useState<Record<string, string>>({})

  async function handleDelete(id: string) {
    const response = await fetch(`/api/forms/${id}`, { method: 'DELETE' })
    if (response.ok) {
      setSubmissions((current) => current.filter((item) => item.id !== id))
    }
  }

  async function handleSave(id: string) {
    const response = await fetch(`/api/forms/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: drafts[id] ?? '' }),
    })

    if (response.ok) {
      setSubmissions((current) =>
        current.map((item) => (item.id === id ? { ...item, message: drafts[id] ?? '' } : item)),
      )
      setEditingId(null)
    }
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <article key={submission.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {submission.formType}
                </span>
                <span className="text-sm text-muted-foreground">
                  {new Date(submission.submittedAt).toLocaleString()}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-foreground">
                {submission.name || 'Unnamed contact'}
              </h2>
            </div>
            {canManage ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingId(submission.id)}
                  className="rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(submission.id)}
                  className="rounded-full border border-destructive/30 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Details</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                {submission.phone ? <li><span className="text-muted-foreground">Phone:</span> {submission.phone}</li> : null}
                {submission.program ? <li><span className="text-muted-foreground">Program:</span> {submission.program}</li> : null}
                {submission.skill ? <li><span className="text-muted-foreground">Skill:</span> {submission.skill}</li> : null}
                {submission.experience ? <li><span className="text-muted-foreground">Experience:</span> {submission.experience}</li> : null}
                {submission.availability ? <li><span className="text-muted-foreground">Availability:</span> {submission.availability}</li> : null}
                {submission.interest ? <li><span className="text-muted-foreground">Interest:</span> {submission.interest}</li> : null}
                {submission.event ? <li><span className="text-muted-foreground">Event:</span> {submission.event}</li> : null}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</p>
              {editingId === submission.id ? (
                <div className="mt-3 space-y-3">
                  <textarea
                    value={drafts[submission.id] ?? submission.message ?? ''}
                    onChange={(event) =>
                      setDrafts((current) => ({ ...current, [submission.id]: event.target.value }))
                    }
                    rows={5}
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleSave(submission.id)}
                      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                  {submission.message || 'No message provided.'}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
