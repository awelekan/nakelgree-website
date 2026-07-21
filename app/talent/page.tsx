import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Briefcase, GraduationCap, Globe, FileText, Users, BadgeCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Talent & Careers',
  description:
    'NakelGreen talent placement, internships, and remote job readiness. Hire vetted African tech talent or join our talent pool.',
}

const supports = [
  {
    icon: FileText,
    title: 'CV & portfolio support',
    description:
      'We help you package your skills with a strong CV, portfolio, and online presence that stands out.',
  },
  {
    icon: Users,
    title: 'Interview coaching',
    description:
      'Mock interviews and feedback so you walk into every conversation confident and prepared.',
  },
  {
    icon: GraduationCap,
    title: 'Internships',
    description:
      'Real, hands-on internship opportunities to gain experience and references that matter.',
  },
  {
    icon: Globe,
    title: 'Remote job readiness',
    description:
      'Learn the tools, communication, and workflows needed to thrive in global remote teams.',
  },
]

const talentSteps = [
  { step: '01', title: 'Train & build', text: 'Complete a track and build a real project portfolio.' },
  { step: '02', title: 'Get matched', text: 'We connect you with internships and roles that fit.' },
  { step: '03', title: 'Land the role', text: 'With coaching and support, step into your new career.' },
]

const employerPoints = [
  'Access pre-vetted, job-ready talent',
  'Hire for full-time, contract, or internship roles',
  'Talent trained on real-world, in-demand skills',
  'A simple process from request to placement',
]

export default function TalentPage() {
  return (
    <>
      <PageHero
        eyebrow="Talent & Careers"
        title="From skilled learner to hired professional"
        description="NakelGreen does not stop at training. We support our talent into real opportunities and help companies hire the skilled people they need."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Career support"
          title="Everything you need to get hired"
          description="We prepare our talent for the job market with practical, personalized support."
        />
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supports.map((s) => (
            <RevealItem
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Your path into the industry"
          />
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {talentSteps.map((s) => (
              <RevealItem
                key={s.step}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-4xl font-bold text-primary/20">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col rounded-3xl border border-border bg-card p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="size-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-foreground">
              Hire Talent
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Looking for skilled, motivated tech talent? Work with NakelGreen to
              find people who are ready to contribute from day one.
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {employerPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Hire Talent
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col rounded-3xl bg-primary p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
              <Users className="size-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-primary-foreground">
              Join the Talent Pool
            </h3>
            <p className="mt-3 leading-relaxed text-primary-foreground/80">
              Are you a graduate or skilled builder ready for your next
              opportunity? Join our talent pool and get matched with roles that
              fit your goals.
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {[
                'Get matched with internships and jobs',
                'Ongoing career and interview support',
                'Access to our partner network',
                'Remote and on-site opportunities',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-primary-foreground/90"
                >
                  <BadgeCheck className="size-5 shrink-0 text-primary-foreground" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Join Talent Pool
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
