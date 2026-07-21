import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, Clock, ArrowLeft } from 'lucide-react'
import { ActivityForms } from '@/components/activity-forms'
import { programs } from '@/lib/data'

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const program = programs.find((p) => p.id === id)

  if (!program) {
    return { title: 'Program not found' }
  }

  return {
    title: `${program.title} | NakelGreen Tech Academy`,
    description: program.fullDescription,
  }
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const program = programs.find((p) => p.id === id)

  if (!program) {
    notFound()
  }

  const Icon = program.icon

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to programs
          </Link>

          <div className="mt-6 flex items-start gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-8" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Clock className="size-4" />
                {program.duration}
              </div>
              <h1 className="mt-4 text-4xl font-bold">{program.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{program.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Full Description */}
            <section>
              <h2 className="text-2xl font-bold">Program overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{program.fullDescription}</p>
            </section>

            {/* What you'll learn */}
            <section>
              <h2 className="text-2xl font-bold">What you will learn</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{skill}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning format */}
            <section>
              <h2 className="text-2xl font-bold">Learning format</h2>
              <ul className="mt-6 space-y-3">
                {program.format.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="size-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcomes */}
            {program.outcomes && (
              <section>
                <h2 className="text-2xl font-bold">Learning outcomes</h2>
                <ul className="mt-6 space-y-3">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Check className="mt-1 size-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Prerequisites */}
            {program.prerequisites && (
              <section>
                <h2 className="text-2xl font-bold">Prerequisites</h2>
                <ul className="mt-6 space-y-2">
                  {program.prerequisites.map((prereq) => (
                    <li key={prereq} className="text-muted-foreground">
                      • {prereq}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick info cards */}
            <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
              {program.schedule && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Schedule</p>
                  <p className="mt-2 text-muted-foreground">{program.schedule}</p>
                </div>
              )}

              {program.investmentInfo && (
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Investment</p>
                  <p className="mt-2 text-muted-foreground">{program.investmentInfo}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-semibold text-foreground">Ready to start learning?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Apply now and join the next cohort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Apply for {program.title}</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Tell us about your background and why you are interested in this program.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <ActivityForms formType="program" />
          </div>
        </div>
      </section>
    </main>
  )
}
