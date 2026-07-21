import { SignupForm } from '@/components/signup-form'

export const metadata = {
  title: 'Create staff account',
  description: 'Create a new staff account for the Nakelgreen admin portal.',
}

export default function StaffSignupPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">New staff account</p>
          <h1 className="mt-3 text-4xl font-bold">Create a staff member profile</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Add team members with roles like admin, manager, or staff so access can be assigned clearly across the site.
          </p>
        </div>
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-sm">
          <SignupForm />
        </div>
      </div>
    </main>
  )
}
