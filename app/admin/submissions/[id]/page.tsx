import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdminNav } from '@/components/admin-nav'
import { SubmissionDetail } from '@/components/submission-detail'
import { readFormSubmissions } from '@/lib/form-storage'
import { requireStaffAccess } from '@/lib/auth'

export const metadata = {
  title: 'Submission details',
  description: 'View and manage submission details.',
}

export default async function SubmissionPage({ params }: { params: Promise<{ id: string }> }) {
  const currentUser = await requireStaffAccess(['admin', 'manager'])
  const { id } = await params
  const submissions = await readFormSubmissions()
  const submission = submissions.find((s) => s.id === id)

  if (!submission) {
    notFound()
  }

  const canManage = currentUser.role === 'admin'

  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <AdminNav />

        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/admin"
            className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            ← Back to dashboard
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {submission.formType}
              </span>
              <span className="text-sm text-muted-foreground">
                {new Date(submission.submittedAt).toLocaleString()}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{submission.name || 'Unnamed submission'}</h1>
            <p className="text-sm text-muted-foreground">{submission.email}</p>
          </div>
        </div>

        <SubmissionDetail submission={submission} canManage={canManage} />
      </div>
    </main>
  )
}
