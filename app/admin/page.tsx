import { AdminNav } from '@/components/admin-nav'
import { AdminSubmissions } from '@/components/admin-submissions'
import { readFormSubmissions } from '@/lib/form-storage'
import { requireStaffAccess } from '@/lib/auth'

export const metadata = {
  title: 'Admin submissions',
  description: 'View all form submissions received from the website.',
}

export default async function AdminPage() {
  const currentUser = await requireStaffAccess(['admin', 'manager'])
  const submissions = await readFormSubmissions()
  const canManage = currentUser.role === 'admin'

  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Admin</p>
            <h1 className="text-3xl font-bold">Website submissions</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Review every program, talent, community, innovation, and general enquiry submission captured from the site.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            Signed in as <span className="font-semibold text-foreground">{currentUser.name}</span> ({currentUser.role})
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
          {canManage
            ? 'You can review and manage submissions as an administrator.'
            : 'You can review submissions with manager-level access.'}
        </div>

        {submissions.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            No submissions yet.
          </div>
        ) : (
          <AdminSubmissions initialSubmissions={submissions} canManage={canManage} />
        )}
      </div>
    </main>
  )
}
