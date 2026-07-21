import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ActivityForms } from '@/components/activity-forms'
import { talentEvents } from '@/lib/data'

export async function generateStaticParams() {
  return talentEvents.map((event) => ({
    id: event.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = talentEvents.find((e) => e.id === id)

  if (!event) {
    return { title: 'Event not found' }
  }

  return {
    title: `${event.title} | NakelGreen Talent`,
    description: event.fullDescription,
  }
}

export default async function TalentEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = talentEvents.find((e) => e.id === id)

  if (!event) {
    notFound()
  }

  const Icon = event.icon

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to talent opportunities
          </Link>

          <div className="mt-6 flex items-start gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-8" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {event.date}
              </div>
              <h1 className="mt-4 text-4xl font-bold">{event.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{event.description}</p>
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
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{event.fullDescription}</p>
            </section>

            {/* Format */}
            {event.format && event.format.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold">What's included</h2>
                <ul className="mt-6 space-y-3">
                  {event.format.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            {event.benefits && event.benefits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold">Benefits</h2>
                <ul className="mt-6 space-y-3">
                  {event.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        ⭐
                      </span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Who should attend */}
            {event.whoShouldAttend && (
              <section>
                <h2 className="text-2xl font-bold">Who should apply?</h2>
                <p className="mt-4 text-muted-foreground">{event.whoShouldAttend}</p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick info cards */}
            <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Availability</p>
                <p className="mt-2 text-muted-foreground">{event.date}</p>
              </div>

              {event.location && (
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Location</p>
                  <p className="mt-2 text-muted-foreground">{event.location}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-semibold text-foreground">Ready to apply?</p>
              <p className="mt-2 text-sm text-muted-foreground">Tell us about yourself below.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Apply now</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Fill out the form below to apply or express your interest in this talent opportunity.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <ActivityForms formType="talent" />
          </div>
        </div>
      </section>
    </main>
  )
}
