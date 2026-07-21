import Link from 'next/link'
import { FormSubmission } from '@/lib/form-storage'

interface SubmissionListProps {
  submissions: FormSubmission[]
}

export function SubmissionList({ submissions }: SubmissionListProps) {
  if (submissions.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
        No submissions yet.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-background">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Form type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submitted</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-sm text-foreground">{submission.name || '—'}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{submission.email || '—'}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {submission.formType}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(submission.submittedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link
                    href={`/admin/submissions/${submission.id}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
