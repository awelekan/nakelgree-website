import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Wifi,
  Armchair,
  Users,
  Lightbulb,
  Trophy,
  Coffee,
  Presentation,
  Printer,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/cta-section'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Innovation Hub',
  description:
    'The NakelGreen Innovation Hub: a co-working space, startup incubation, hackathons, and mentorship for builders and founders.',
}

const pillars = [
  {
    icon: Armchair,
    title: 'Co-working Space',
    description:
      'A focused, well-equipped workspace designed for makers, freelancers, and remote teams to do their best work.',
  },
  {
    icon: Lightbulb,
    title: 'Startup Incubation',
    description:
      'Structured support to help early-stage founders validate ideas, build products, and grow with confidence.',
  },
  {
    icon: Trophy,
    title: 'Hackathons & Mentorship',
    description:
      'Regular hackathons and one-on-one mentorship that push ideas forward and sharpen builder skills.',
  },
]

const facilities = [
  { icon: Wifi, label: 'High-speed internet' },
  { icon: Armchair, label: 'Ergonomic workspaces' },
  { icon: Presentation, label: 'Meeting & pitch rooms' },
  { icon: Coffee, label: 'Café & lounge areas' },
  { icon: Printer, label: 'Printing & utilities' },
  { icon: Users, label: 'Event & community space' },
]

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation Hub"
        title="Where ideas find space to become products"
        description="Beyond learning, NakelGreen gives you the environment to build. From a productive co-working space to incubation and hackathons, this is where innovation happens."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <RevealItem
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/coworking.png"
                alt="NakelGreen co-working space with modern desks and meeting pods"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Facilities
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to build, in one place
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our space is designed for productivity and collaboration — reliable
              infrastructure, comfortable work areas, and rooms for meetings,
              pitches, and community events.
            </p>
            <RevealStagger className="mt-8 grid grid-cols-2 gap-4">
              {facilities.map((f) => (
                <RevealItem
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <f.icon className="size-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {f.label}
                  </span>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Community
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A community that moves you forward
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Innovation rarely happens in isolation. At NakelGreen you are
              surrounded by ambitious founders, engineers, designers, and mentors
              who share knowledge, give feedback, and open doors.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Peer learning and collaboration',
                'Access to experienced mentors and advisors',
                'Networking with founders and partners',
                'A supportive space to test and iterate',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Users className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/community.png"
                alt="Community members at a NakelGreen event"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Bring your idea to the hub"
        description="Whether you need a desk, a mentor, or a launchpad for your startup, the Innovation Hub is open to you."
        primary={{ label: 'Join the Hub', href: '/contact' }}
        secondary={{ label: 'See Events', href: '/community' }}
      />
    </>
  )
}
