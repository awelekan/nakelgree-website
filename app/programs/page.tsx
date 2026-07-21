import type { Metadata } from 'next'
import { Check, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/cta-section'
import { ActivityForms } from '@/components/activity-forms'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'
import { programs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Programs & Tech Academy',
  description:
    'Explore NakelGreen Tech Academy programs: Data Analytics, Software Engineering, UI/UX Design, Cybersecurity, Cloud Computing, Product Management, and Digital Marketing.',
}

const format = [
  {
    title: 'Hands-on learning',
    description: 'Practical exercises and labs from your very first session.',
  },
  {
    title: 'Mentorship',
    description: 'Guidance from experienced industry practitioners.',
  },
  {
    title: 'Real projects',
    description: 'Build a portfolio that proves your skills to employers.',
  },
]

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tech Academy"
        title="Career-focused programs that get you job-ready"
        description="Choose from seven industry-aligned tracks. Every program is practical, project-based, and taught by people who work in the field."
      />

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {format.map((f) => (
            <Reveal key={f.title} className="flex items-start gap-3">
              <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3.5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Explore our tracks"
          title="Find the program that fits your goals"
          description="From analytics to engineering to design, there is a clear path for wherever you want to go."
        />

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <RevealItem key={program.title}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <program.icon className="size-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    <Clock className="size-3" />
                    {program.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Skills covered
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Learning format
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {program.format.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="size-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Apply for a program</h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Choose a track and tell us what you want to learn. We will follow up with the next steps for your application.
            </p>
          </div>
          <ActivityForms formType="program" />
        </div>
      </section>

      <CTASection
        title="Ready to build your tech career?"
        description="Applications for the next cohort are open. Pick a track and take the first step."
        primary={{ label: 'Apply Now', href: '/contact' }}
        secondary={{ label: 'Talk to Us', href: '/contact' }}
      />
    </>
  )
}
