import { AdminNav } from '@/components/admin-nav'
import { SummaryCards } from '@/components/summary-cards'
import { SubmissionList } from '@/components/submission-list'
import { readFormSubmissions } from '@/lib/form-storage'
import { requireStaffAccess } from '@/lib/auth'

export const metadata = {
  title: 'Admin dashboard',
  description: 'View submission statistics and manage forms.',
}

export default async function AdminPage() {
  const currentUser = await requireStaffAccess(['admin', 'manager'])
  const submissions = await readFormSubmissions()

  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AdminNav />

        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Dashboard</p>
            <h1 className="text-3xl font-bold">Submissions overview</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Track form submissions across all website activities and manage responses by type.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{currentUser.name}</span> • {currentUser.role}
          </div>
        </div>

        <SummaryCards submissions={submissions} />

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Recent submissions</h2>
          <SubmissionList submissions={submissions} />
        </div>
      </div>
    </main>
  )
}
