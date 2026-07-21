import { LoginForm } from '@/components/login-form'

export const metadata = {
  title: 'Staff login',
  description: 'Sign in to the Nakelgreen staff admin area.',
}

export default function StaffLoginPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Staff portal</p>
          <h1 className="mt-3 text-4xl font-bold">Access the website admin area</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Staff accounts can sign in to manage submissions, view content activity, and work with role-based permissions.
          </p>
        </div>
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
