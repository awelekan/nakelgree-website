'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormSubmission } from '@/lib/form-storage'

interface SubmissionDetailProps {
  submission: FormSubmission
  canManage: boolean
}

export function SubmissionDetail({ submission, canManage }: SubmissionDetailProps) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [editedMessage, setEditedMessage] = useState(submission.message || '')
  const [error, setError] = useState('')

  async function handleSave() {
    const response = await fetch(`/api/forms/${submission.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: editedMessage }),
    })

    if (response.ok) {
      setIsEditing(false)
      router.refresh()
    } else {
      setError('Failed to save changes')
    }
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return
    }

    setIsDeleting(true)
    const response = await fetch(`/api/forms/${submission.id}`, { method: 'DELETE' })

    if (response.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      setError('Failed to delete submission')
      setIsDeleting(false)
    }
  }

  const fields = [
    { label: 'Name', value: submission.name },
    { label: 'Email', value: submission.email },
    { label: 'Phone', value: submission.phone },
    { label: 'Program', value: submission.program },
    { label: 'Skill', value: submission.skill },
    { label: 'Experience', value: submission.experience },
    { label: 'Availability', value: submission.availability },
    { label: 'Interest', value: submission.interest },
    { label: 'Event', value: submission.event },
  ].filter(({ value }) => value)

  return (
    <div className="space-y-6">
      {fields.length > 0 && (
        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Details</h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {fields.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
                <dd className="mt-1 text-sm text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Message</h2>
          {canManage && !isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Edit
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-3">
            <textarea
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              rows={8}
              className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Save changes
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false)
                  setEditedMessage(submission.message || '')
                }}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
            {submission.message || 'No message provided.'}
          </p>
        )}
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}

      {canManage && (
        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="w-full rounded-full border border-destructive/30 px-4 py-3 text-sm font-semibold text-destructive hover:bg-destructive/10 disabled:opacity-50"
        >
          {isDeleting ? 'Deleting...' : 'Delete submission'}
        </button>
      )}
    </div>
  )
}
